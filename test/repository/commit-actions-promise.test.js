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
  // after((done) => {
  //   // Try cleanup 5secs after tests done
  //   setTimeout(() => {
  //     console.log(`Cleaning up!!!`)
  //     client.removeProject()
  //     console.log(`DONE Clean up!!!`)
  //     done()
  //   }, cleanupTimeout)
  // });


  it('should commit actions in promise way', function (done) {
    let random = Math.floor((Math.random() * 1000) + 1)
    let promise = client.promise
    console.log('promise client', pretty(promise))
    console.log('repository API', pretty(promise.repository))

    function errorAndReject(err, reject) {
      console.error(err)
      reject(err)
    }

    function commitActionsPromised(data) {
      return new Promise((resolve, reject) => {
        console.log('new promise')
        client.repository.commitActions(data, (err, result) => {
          console.log('received response', {
            err,
            result
          })
          err ? errorAndReject(err, reject) : resolve(result)
        })
      })
    }
    // same as:
    // promise.repository.commitActions
    commitActionsPromised({
        id: client.id,
        branch: 'master',
        actions: [{
          "action": "create",
          "file_path": `bar-${random}`,
          "content": "some content"
        }],
        // author_email: 'test@gmail.com',
        // author_name: 'tester',
        commit_message: 'more goodies',
      })
      .then(result => {
        console.log('then', result)
        should.exists(result);
        should.ok(result);
        done();
      })
      .catch(err => {
        console.log('error', err)
        should.not.exists(err);
        done()
      })
  });
})