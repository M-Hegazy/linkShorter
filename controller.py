import json
from data import *
from flask import jsonify
import string
import random
import re


def list_short_links():
    getlinks = db.links.find()
    return json.loads(json_util.dumps(getlinks))


def generate_new_slug():
    return ''.join(random.choices(
        string.ascii_uppercase + string.ascii_lowercase + string.digits, k=6))


def slug_in_request(slug):
    old_slug = db.links.find_one({'slug': slug})
    if old_slug:
        return(old_slug)
    return(old_slug)


def create_new_record(request):
    if 'slug' in request:
        db.links.insert_one({'slug': request['slug'], 'web': request['web'], 'ios': {'primary': request['ios']['primary'], 'fallback': request['ios']['fallback']}, 'android': {
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
                db.links.insert_one({'slug': new_slug, 'web': request['web'], 'ios': {'primary': request['ios']['primary'], 'fallback': request['ios']['fallback']}, 'android': {
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
        found_url = db.links.find_one({'web': request['web']})
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

        elif 'web' in request:
            result = db.links.update_one(
                {'slug': slug}, {'$set': {'web': request['web']}})
            return jsonify(response), 201
    else:
        response = {
            "status": "faild",
            "message": "slug doesn't exist"}
        return jsonify(response), 400
