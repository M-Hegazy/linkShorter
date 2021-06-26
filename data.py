import pymongo
client = pymongo.MongoClient(
    "mongnoDB_connection_link", ssl=True, ssl_cert_reqs='CERT_NONE')
db = client.get_database('linkShorter')
