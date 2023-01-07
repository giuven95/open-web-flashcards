import json
import os
import psycopg2
from flask import Flask, request, abort, jsonify, Response
from flask_cors import CORS, cross_origin
from constants import API_PREFIX, DEFAULT_PAGE_SIZE
from querybuilder import build_query

app = Flask(__name__)
cors = CORS(app)


def to_camel_case(data):
    if isinstance(data, list):
        for i in range(len(data)):
            data[i] = to_camel_case(data[i])
        return data
    if isinstance(data, dict):
        new_data = {}
        for key, value in data.items():
            new_key = key.replace('_', ' ')
            new_key = new_key.title().replace(' ', '')
            new_key = new_key[0].lower() + new_key[1:]
            new_data[new_key] = to_camel_case(value)
        return new_data
    return data


def db_make_connection():
    conn = psycopg2.connect(database=os.environ["DATABASE_NAME"], user=os.environ["DATABASE_USER"],
                            password=os.environ["DATABASE_PASSWORD"], host=os.environ["DATABASE_HOST"], port=os.environ["DATABASE_PORT"])
    return conn


@app.route(API_PREFIX + '/deck', methods=['GET'])
def get_decks():
    page = request.args.get('page', default=1, type=int)
    page_size = request.args.get(
        'pageSize', default=DEFAULT_PAGE_SIZE, type=int)

    conn = db_make_connection()
    cur = conn.cursor()

    offset = (page - 1) * page_size
    cur.execute("SELECT * FROM deck_full_info LIMIT %s OFFSET %s",
                (page_size, offset))
    rows = cur.fetchall()
    cur.close()

    # Convert rows to a list of dictionaries
    column_names = [desc[0] for desc in cur.description]
    decks = [dict(zip(column_names, row)) for row in rows]
    decks = to_camel_case(decks)
    for deck in decks:
        deck["otherTags"] = []  # TODO: change
    return jsonify(decks)


@app.route(API_PREFIX + '/deck/query', methods = ['POST'])
def query_decks():
    content = request.json
    query_data = content["query"]
    page = content["page"]
    page_size = content["pageSize"]

    offset = (page - 1) * page_size
    query = build_query(query_data, "deck_full_info", page_size, offset)

    conn = db_make_connection()
    cur = conn.cursor()
    cur.execute(query)
    rows = cur.fetchall()
    cur.close()

    # Convert rows to a list of dictionaries
    column_names = [desc[0] for desc in cur.description]
    decks = [dict(zip(column_names, row)) for row in rows]
    decks = to_camel_case(decks)
    for deck in decks:
        deck["otherTags"] = []  # TODO: change
    return jsonify(decks)