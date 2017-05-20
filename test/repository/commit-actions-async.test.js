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

const cleanupTimeout = 1000

function pretty(obj) {
  return JSON.stringify(obj, null, 2)
}

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
    }, cleanupTimeout)
  });


  it('async/await: should commit a list of actions', async function () {
    let random = Math.floor((Math.random() * 1000) + 1)
    try {
      let result = await client.promise.repository.commitActions({
        id: client.id,
        branch: 'master',
        actions: [{
          "action": "create",
          "file_path": `foo-${random}`,
          "content": "some content"
        }],
        author_email: 'test@gmail.com',
        author_name: 'tester',
        commit_message: 'more goodies',
      })
      console.log('result', result)
      should.exists(result);
      should.ok(result);
    } catch (err) {
      console.error(err)
      should.not.exists(err);
    }
  })
})