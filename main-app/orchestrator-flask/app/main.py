
import requests
from flask import Flask, request, abort, jsonify, Response
from flask_cors import CORS, cross_origin
from constants import API_PREFIX, DECK_API_ADDRESS, MAILER_API_ADDRESS

app = Flask(__name__)
cors = CORS(app)

def pass_request(url, method, params_or_json):
    if method == "GET":
        response = requests.get(url, params=params_or_json)
    elif method == "POST":
        response = requests.post(url, json=params_or_json)
    elif method == "PUT":
        response = requests.put(url, json=params_or_json)
    elif method == "DELETE":
        response = requests.delete(url, json=params_or_json)
    else:
        return Response("Invalid request method", status=400)
    return response.json()

@app.route(API_PREFIX + '/deck', methods=["GET"])
def get_decks():
    params = request.args
    response = pass_request(DECK_API_ADDRESS + API_PREFIX + '/deck', request.method, params)
    return jsonify(response)

@app.route(API_PREFIX + '/deck/query', methods=["POST"])
def query_decks():
    content = request.json
    response = pass_request(DECK_API_ADDRESS + API_PREFIX + '/deck/query', request.method, content)
    return jsonify(response)

@app.route(API_PREFIX + '/contact', methods=["POST"])
def send_contact():
    content = request.json
    response = pass_request(MAILER_API_ADDRESS + API_PREFIX + '/contact', request.method, content)
    return jsonify(response)

@app.route(API_PREFIX + '/idea', methods=["POST"])
def send_idea():
    content = request.json
    response = pass_request(MAILER_API_ADDRESS + API_PREFIX + '/idea', request.method, content)
    return jsonify(response)