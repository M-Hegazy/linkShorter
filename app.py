from flask import Flask, request, jsonify
from flask_cors import CORS
from controller import *

app = Flask(__name__, template_folder='templates')
CORS(app)


@app.route('/shortlinks/<slug>', methods=['PUT'])
def update_slug(slug):
    return update_record(slug, request.json)


@app.route('/', methods=['GET'])
def get_single_route(request.json):
    return single_link()

@app.route('/shortlinks', methods=['GET', 'POST'])
def short_link():
    if request.method == 'POST':
        if not request.json:
            return jsonify({"msg": "Missing JSON in request "}), 400
        return create_new_short_link(request.json)

    else:

        response = list_short_links()
        return jsonify(response)
