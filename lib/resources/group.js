/**!
 * gitlab - lib/resources/group.js
 *
 * Copyright(c) repo-utils and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var util = require('util');
var restful = require('restful-client');

module.exports = Group;

function Group(client) {
  this.constructor.super_.call(this, client, '/groups', 'id');
}
util.inherits(Group, restful.RESTFulResource);

/**
 * Search for matching groups.
 *
 * GET /groups?search=name
 *
 * @param {Function(err, groups)} callback
 **/
Group.prototype.search = function (params, callback) {
  let queryStr = params.query
  this.client.request('get', '/groups' + queryStr, params, callback);
  return this;
};

/**
 * Gets a list of group members viewable by the authenticated user.
 *
 * GET /groups/:id/members
 *
 * @param id group id
 * @param {Function(err, users)} callback
 **/
Group.prototype.members = function (params, callback) {
  this.client.request('get', '/groups/:id/members', params, callback);
  return this;
};


/**
 * Gets a member of a group
 *
 * GET /groups/:id/members/:user_id
 *
 * @param id group id
 * @param user_id user id
 * @param {Function(err, user)} callback
 **/
Group.prototype.member = function (params, callback) {
  this.client.request('get', '/groups/:id/members/:user_id', params, callback);
  return this;
};

/**
 * Add a member to a group
 *
 * POST /groups/:id/members/:user_id
 *
 * @param id group id
 * @param user_id user id
 * @param access_level - a valid access level (integer)
 * @param expires_at - (optional) a date string in the format YEAR-MONTH-DAY
 * @param {Function(err, user)} callback
 **/
Group.prototype.addMember = function (params, callback) {
  this.client.request('post', '/groups/:id/members/:user_id', params, callback);
  return this;
};

/**
 * Update a member in a group
 *
 * POST /groups/:id/members/:user_id
 *
 * @param id group id
 * @param user_id user id
 * @param access_level - a valid access level (integer)
 * @param expires_at - (optional) a date string in the format YEAR-MONTH-DAY
 * @param {Function(err, user)} callback
 **/
Group.prototype.updateMember = function (params, callback) {
  this.client.request('put', '/groups/:id/members/:user_id', params, callback);
  return this;
};

/**
 * Remove a member from a group
 *
 * POST /groups/:id/members/:user_id
 *
 * @param id group id
 * @param user_id user id
 * @param {Function(err, user)} callback
 **/
Group.prototype.removeMember = function (params, callback) {
  this.client.request('delete', '/groups/:id/members/:user_id', params, callback);
  return this;
};

/**
 * Get a list of projects in this group.
 *
 * GET /groups/:id/projects
 *
 * @param id group id
 * @param {Function(err, projects)} callback
 **/
Group.prototype.list = function (params, callback) {
  this.client.request('get', '/groups/:id/projects', params, callback);
  return this;
};

/**
 * Removes group with all projects inside.
 *
 * DELETE /groups/:id
 *
 * @param id group id
 * @param {Function(err, project)} callback
 **/
Group.prototype.remove = function (params, callback) {
  this.client.request('delete', '/groups/:id', params, callback);
  return this;
};


/**
 * Get all details of a group.
 *
 * GET /groups/:id
 *
 * @param id group id
 * @param {Function(err, group)} callback
 **/
Group.prototype.details = function (params, callback) {
  this.client.request('get', '/groups/:id', params, callback);
  return this;
};

/**
 * Updates the project group. Only available to group owners and administrators.
 *
 * PUT /groups/:id
 *
 * @param id group id
 * @param name (required) - The name of the group
 * @param path (required) - The path of the group
 * @param description (optional) - The group's description
 * @param membership_lock (optional, boolean) - Prevent adding new members to project membership within this group
 * @param share_with_group_lock (optional, boolean) - Prevent sharing a project with another group within this group
 * @param visibility (optional) - The group's visibility. Can be private, internal, or public.
 * @param lfs_enabled (optional) - Enable/disable Large File Storage (LFS) for the projects in this group
 * @param request_access_enabled (optional) - Allow users to request member access.
 * @param parent_id (optional) - The parent group id for creating nested group.
 * @param shared_runners_minutes_limit (optional) - (admin-only) Pipeline minutes quota for this group
 **/
Group.prototype.update = function (params, callback) {
  this.client.request('put', '/groups/:id', params, callback);
  return this;
};

/**
 * Creates a new project group. Available only for users who can create groups.
 *
 * POST /groups
 *
 * @param name (required) - The name of the group
 * @param path (required) - The path of the group
 * @param description (optional) - The group's description
 * @param membership_lock (optional, boolean) - Prevent adding new members to project membership within this group
 * @param share_with_group_lock (optional, boolean) - Prevent sharing a project with another group within this group
 * @param visibility (optional) - The group's visibility. Can be private, internal, or public.
 * @param lfs_enabled (optional) - Enable/disable Large File Storage (LFS) for the projects in this group
 * @param request_access_enabled (optional) - Allow users to request member access.
 * @param parent_id (optional) - The parent group id for creating nested group.
 * @param shared_runners_minutes_limit (optional) - (admin-only) Pipeline minutes quota for this group
 *
 **/
Group.prototype.create = function (params, callback) {
  this.client.request('post', '/groups', params, callback);
  return this;
};

/**
 * Transfer a project to the Group namespace. Available only for admin
 *
 * POST  /groups/:id/projects/:project_id
 *
 * @param {Object} params
 *  - {String} id group id
 *  - {String} project_id project id
 * @param {Function(err, project)} callback
 **/
Group.prototype.transferProject = function (params, callback) {
  this.client.request('post', '/groups/:id/projects/:project_id', params, callback);
  return this;
};
