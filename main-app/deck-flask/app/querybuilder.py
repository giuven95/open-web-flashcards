from constants import OPERATOR_TRANSLATIONS, UPPERCASE_LETTERS, ALLOWED_FIELDS

def to_snake_case(word):
    new_word = ""
    for i, letter in enumerate(word):
        if letter in UPPERCASE_LETTERS:
            if i > 0:
                new_word += "_"
            new_word += letter.lower()
        else:
            new_word += letter
    return new_word

def build_query(query_data, table_name, page, page_size):
    def inner_build_where_clause(rule):
        field = to_snake_case(rule['field'])
        operator = rule['operator']
        value = rule['value']
        if field not in ALLOWED_FIELDS:
            raise ValueError("Invalid field: {}".format(field))
        if operator in OPERATOR_TRANSLATIONS:
            formatted_value = "{}".format(value)
            where_clause = "{} {}".format(field, OPERATOR_TRANSLATIONS[operator].format(formatted_value))
        else:
            raise ValueError("Invalid operator: {}".format(operator))
        return where_clause

    def build_where_clause(data):
        rules = data['rules']
        combinator = data['combinator']
        if 'not' in data: not_ = data['not']
        else: not_ = False
        where_clauses = []
        for rule in rules:
            if 'combinator' in rule:
                sub_where_clause = build_where_clause(rule)
                where_clauses.append(sub_where_clause)
            else:
                where_clauses.append(inner_build_where_clause(rule))
        if not_:
            where_clauses = ["NOT ({})".format(wc) for wc in where_clauses]
        
        if combinator == "and":
            where_clause = " AND ".join(where_clauses)
        elif combinator == "or":
            where_clause = " OR ".join(where_clauses)
        else:
            raise ValueError("Invalid combinator: {}".format(combinator))
        
        return where_clause

    where_clause = build_where_clause(query_data)
    query = "SELECT * FROM {} WHERE {} LIMIT {} OFFSET {}".format(table_name, where_clause, page, page_size)
    return query