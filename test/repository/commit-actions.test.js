/*!
 * gitlab - test/repository.test.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var pedding = require('pedding');
var client = require('../client');

describe('client.repository.commitActions()', function () {
  it('should commit a list of actions', function (done) {
    client.repository.commitActions({
      id: 55045,
      branch: 'develop',
      actions: [{
        "action": "create",
        "file_path": "foo",
        "content": "some content"
      }],
      author_email: 'test@gmail.com',
      author_name: 'tester',
      commit_message: 'goodies',
    }, function (err, raw) {
      should.not.exists(err);
      should.exists(raw);
      should.ok(Buffer.isBuffer(raw));
      raw.should.be.a.Buffer;
      raw.length.should.above(0);
      raw.toString().should.containEql('gitlab-client-unittest\n=======\n\n');
      done();
    });

    it('async/await: should commit a list of actions', async function () {
      try {
        let res = await client.promise.repository.commitActions({
          id: 55045,
          branch: 'develop',
          actions: [{
            "action": "create",
            "file_path": "foo",
            "content": "some content"
          }],
          author_email: 'test@gmail.com',
          author_name: 'tester',
          commit_message: 'goodies',
        })

        should.exists(raw);
        should.ok(Buffer.isBuffer(raw));
        raw.should.be.a.Buffer;
        raw.length.should.above(0);
        raw.toString().should.containEql('gitlab-client-unittest\n=======\n\n');

      } catch (err) {
        should.not.exists(err);
      }

    });
  });

})