import psycopg2
import os
import time


def db_make_connection():
    conn = psycopg2.connect(database=os.environ["DATABASE_NAME"], user=os.environ["DATABASE_USER"],
                            password=os.environ["DATABASE_PASSWORD"], host=os.environ["DATABASE_HOST"], port=os.environ["DATABASE_PORT"])
    return conn


def string_build_char_lists():
    old_chars = []
    new_chars = []
    for i in range(0, 65536):  # 0x0000 to 0xFFFF
        old_chars.append("\\u{:04x}".format(i))
        new_chars.append(chr(i))
    return old_chars, new_chars


def db_get_table_names(conn):
    cur = conn.cursor()
    cur.execute("""
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema='public';
    """)
    table_names = [table[0] for table in cur.fetchall()]
    cur.close()
    return table_names


def db_get_table_to_string_fields(conn, table_names):
    table_to_string_fields = {}
    cur = conn.cursor()
    for table in table_names:
        cur.execute("""
            SELECT column_name
            FROM information_schema.columns
            WHERE (data_type='character varying'
            OR data_type='text')
            AND table_name=%s;
        """, (table,))
        table_to_string_fields[table] = [field[0]
                                         for field in cur.fetchall()]
    cur.close()
    return table_to_string_fields


def db_repair_string_field_values(conn, old_chars, new_chars, table_to_string_fields):
    cur = conn.cursor()
    for table, fields in table_to_string_fields.items():
        for field in fields:
            cur.execute("""
                SELECT {} FROM {}
            """.format(field, table))
            rows = cur.fetchall()
            for row in rows:
                fixed_row = row[0]
                for i in range(len(old_chars)):
                    fixed_row = fixed_row.replace(old_chars[i], new_chars[i])
                if fixed_row == row[0]:
                    continue
                if len(fixed_row) < 5:
                    continue
                query_string = """
                    UPDATE {}
                    SET {} = %s
                    WHERE {} = %s
                """
                query_string = query_string.format(table, field, field)
                try:
                    print("WILL EXECUTE")
                    print(query_string)
                    print("ON")
                    print(fixed_row, row[0])
                    cur.execute(query_string, (fixed_row, row[0]))
                    conn.commit()
                except:
                    pass
    cur.close()


def main_inner():
    old_chars, new_chars = string_build_char_lists()
    conn = db_make_connection()
    table_names = db_get_table_names(conn)
    print("table_names")
    print(table_names)
    table_to_string_fields = db_get_table_to_string_fields(conn, table_names)
    print("table_to_string_fields")
    print(table_to_string_fields)
    db_repair_string_field_values(
        conn, old_chars, new_chars, table_to_string_fields)


def main():
    while True:
        main_inner()
        time.sleep(3600)  # wait 1 hour


if __name__ == "__main__":
    main()
