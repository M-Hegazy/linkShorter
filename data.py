import pymongo
client = pymongo.MongoClient(
    "mongodb+srv://Mourad:Hegazy95@mourad.6r1yb.mongodb.net/test?retryWrites=true&w=majority", ssl=True, ssl_cert_reqs='CERT_NONE')
db = client.get_database('linkShorter')
