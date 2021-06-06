import json
from data import *
from flask import jsonify, redirect
import string
import random
import re
from bson import json_util


def slug_in_request(slug):
    old_slug = db.links.find_one({'slug': slug})
    return(old_slug)


def redirect_to_web(slug):
    response = {
        "message": "we don't have that slug yet ",
        "slug": slug,
        "status": "faild"
    }
    links = slug_in_request(slug)
    if links:

        return links['web']
    else:
        return jsonify(response)


def list_short_links():
    getlinks = db.links.find()
    return json.loads(json_util.dumps(getlinks))


def generate_new_slug():
    return ''.join(random.choices(
        string.ascii_uppercase + string.ascii_lowercase + string.digits, k=6))


def create_new_record(request):
    if 'slug' in request:
        db.links.insert_one({'slug': request['slug'], 'web': request['url'], 'ios': {'primary': request['ios']['primary'], 'fallback': request['ios']['fallback']}, 'android': {
            'primary': request['android']['primary'], 'fallback': request['android']['fallback']}})
        response = {
            "status": "successful",
            "slug": request['slug'],
            "message": "created successfully"}
        return jsonify(response)
    else:
        while True:
            new_slug = generate_new_slug()
            repeated = db.links.find_one({'slug': new_slug})
            if not repeated:
                db.links.insert_one({'slug': new_slug, 'web': request['url'], 'ios': {'primary': request['ios']['primary'], 'fallback': request['ios']['fallback']}, 'android': {
                                    'primary': request['android']['primary'], 'fallback': request['android']['fallback']}})

                response = {
                    "status": "successful",
                    "slug": new_slug,
                    "message": "created successfully"}
                return jsonify(response)


def create_new_short_link(request):
    if 'slug' in request:
        if slug_in_request(request['slug']):
            response = {
                "message": "this slug already exist",
                "slug": request['slug'],
                "status": "faild"
            }
            return jsonify(response), 400
        else:
            return(create_new_record(request), 201)
    else:
        pass
        found_url = db.links.find_one({'web': request['url']})
        if found_url:
            response = {
                "message": "this web site already exist",
                "slug": found_url['slug'],
                "status": "faild"
            }
            return jsonify(response), 400
        else:
            return(create_new_record(request), 201)


def update_record(slug, request):
    slug = re.sub(r'[^\w]', '', slug)
    response = {"status": "successful",
                "message": "updated  successfully"
                }

    if slug_in_request(slug):
        if 'ios' in request:
            result = db.links.update_one({'slug': slug}, {
                                         "$set": {'ios': {'primary': request['ios']['primary'], 'fallback': request['ios']['fallback']}}})
            return jsonify(response), 201
        elif 'android' in request:
            result = db.links.update_one({'slug': slug}, {
                                         "$set": {'android': {'primary': request['android']['primary'], 'fallback': request['android']['fallback']}}})
            return jsonify(response), 201

        elif 'url' in request:
            result = db.links.update_one(
                {'slug': slug}, {'$set': {'web': request['url']}})
            return jsonify(response)

    else:
        response = {
            "status": "faild",
            "message": "slug doesn't exist"}
        return jsonify(response), 400


def single_link(slug):
    response = {
        "message": "we don't have that slug yet ",
        "slug": slug,
        "status": "faild"
    }
    data = slug_in_request(slug)
    if data:
        return json.loads(json_util.dumps(data))
    else:
        return jsonify(response)
