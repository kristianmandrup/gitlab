/**!
 * gitlab - lib/resources/group.js
 *
 * Copyright(c) repo-utils and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   kmandrup <kmandrup@gmail.com> (tecla5.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var util = require('util');
var restful = require('restful-client');
var queryString = require('query-string')

module.exports = User;

function User(client) {
  this.constructor.super_.call(this, client, '/users', 'id');
}
util.inherits(User, restful.RESTFulResource);

/**
 * Search for matching groups.
 *
 * GET /groups?search=name
 *
 * @param {Function(err, users)} callback
 */
User.prototype.filter = function (params, callback) {
  let queryStr = queryString.stringify(params.criteria)
  this.client.request('get', '/users' + queryStr, params, callback);
  return this;
};

User.prototype.search = User.prototype.filter
// filter without criteria
User.prototype.list = function (callback) {
  return this.filter({}, callback)
}

/**
 * Gets a user
 *
 * GET /user/:id
 *
 * @param id user id
 * @param {Function(err, user)} callback
 */
User.prototype.details = function (params, callback) {
  this.client.request('get', '/users/:id', params, callback);
  return this;
};

User.prototype.info = User.prototype.details

/**
 * Adds a user
 *
 * POST /users
 *
 * @param {Function(err, user)} callback
 */
User.prototype.create = function (params, callback) {
  this.client.request('post', '/users', params, callback);
  return this;
};

User.prototype.add = User.prototype.create

/**
 * Update a user
 *
 * POST /users/:id
 *
 * @param id user id
 * @param access_level - a valid access level (integer)
 * @param expires_at - (optional) a date string in the format YEAR-MONTH-DAY
 * @param {Function(err, user)} callback
 */
Group.prototype.update = function (params, callback) {
  this.client.request('put', '/users/:id', params, callback);
  return this;
};

/**
 * Removes a user
 *
 * DELETE /users/:id
 *
 * @param id user id
 * @param {Function(err, user)} callback
 */
User.prototype.remove = function (params, callback) {
  this.client.request('delete', '/users/:id', params, callback);
  return this;
};

User.prototype.delete = User.prototype.remove
