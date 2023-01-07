API_PREFIX = "/api/v1"
DEFAULT_PAGE_SIZE = 50
UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
OPERATOR_TRANSLATIONS = {
    '=': "= '{}'",
    '!=': "!= '{}'",
    '<': "< '{}'",
    '>': "> '{}'",
    '<=': "<= '{}'",
    '>=': ">= '{}'",
    'contains': "LIKE '%{}%'",
    'beginsWith': "LIKE '{}%'",
    'endsWith': "LIKE '%{}'",
    'doesNotContain': "NOT LIKE '%{}%'",
    'doesNotBeginWith': "NOT LIKE '{}%'",
    'doesNotEndWith': "NOT LIKE '%{}'",
    'null': "IS NULL",
    'notNull': "IS NOT NULL"
}
ALLOWED_FIELDS = set(['id', 'anki_id', 'main_tag',
                      'num_views', 'num_ratings', 'num_likes', 'num_dislikes',
                      'num_downloads', 'score', 'file_size', 'num_audio_items', 
                      'num_images', 'name', 'description'])