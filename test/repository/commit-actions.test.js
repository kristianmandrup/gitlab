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
var client = require('../v4/client');

describe('client.repository.commitActions()', function () {
  before(function (done) {
    // use API v4 ??
    // See: https://docs.gitlab.com/ce/api/v3_to_v4.html
    // process.env.NODE_GITLAB_API = 'https://gitlab.com/api/v4'

    console.log('before suite, create fresh test project to be used :)')
    client.createProject(function (err) {
      console.log(`test project created: ${client.id}`)
      console.log(`Ready for action!`)
      done();
    });
  });

  // Seems to work only if I don't clean up (remove) project after.
  // Looks like a race condition!?
  after((done) => {
    // Try cleanup 5secs after tests done
    setTimeout(() => {
      console.log(`Cleaning up!!!`)
      client.removeProject()
      console.log(`DONE Clean up!!!`)
      done()
    }, 2000)
  });

  it('should commit a list of actions', function (done) {
    console.log(`repository.commitActions`, client.id)
    let random = Math.floor((Math.random() * 1000) + 1)
    client.repository.commitActions({
      id: client.id,
      // branch_name: 'develop',
      branch: 'develop',
      actions: [{
        action: 'create',
        file_path: `foolish-${random}`,
        content: 'some content'
        // encoding: 'text'
      }],
      // author_email: 'test@gmail.com',
      // author_name: 'tester',
      commit_message: 'goodies'
    }, function (err, res) {
      console.log('RETURNED', {
        err,
        res
      })
      should.not.exists(err);
      should.exists(res);
      done();
    });

    // it.skip('async/await: should commit a list of actions', async function () {
    //   try {
    //     let res = await client.promise.repository.commitActions({
    //       id: client.id,
    //       branch_name: 'develop',
    //       actions: [{
    //         "action": "create",
    //         "file_path": "foo",
    //         "content": "some content"
    //       }],
    //       author_email: 'test@gmail.com',
    //       author_name: 'tester',
    //       commit_message: 'goodies',
    //     })

    //     console.log({
    //       res
    //     })
    //     should.exists(res);
    //     should.ok(res);
    //   } catch (err) {
    //     should.not.exists(err);
    //   }

    // });
  });

})