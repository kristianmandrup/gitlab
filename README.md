gitlab
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/node-gitlab.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-gitlab
[travis-image]: https://img.shields.io/travis/repo-utils/gitlab.svg?style=flat-square
[travis-url]: https://travis-ci.org/repo-utils/gitlab
[coveralls-image]: https://img.shields.io/coveralls/repo-utils/gitlab.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/repo-utils/gitlab?branch=master
[gittip-image]: https://img.shields.io/gittip/fengmk2.svg?style=flat-square
[gittip-url]: https://www.gittip.com/fengmk2/
[david-image]: https://img.shields.io/david/repo-utils/gitlab.svg?style=flat-square
[david-url]: https://david-dm.org/repo-utils/gitlab
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/node-gitlab.svg?style=flat-square
[download-url]: https://npmjs.org/package/node-gitlab

Gitlab API Node.js client

* [Gitlab API document](https://github.com/gitlabhq/gitlabhq/tree/master/doc/api)

## Install

```bash
$ npm install node-gitlab --save
```

## Usage

```js
var gitlab = require('node-gitlab');

var client = gitlab.create({
  api: 'https://gitlab.com/api/v3',
  privateToken: 'your private token'
});

client.milestones.list({id: 1}, function (err, milestones) {
  console.log(err, milestones);
});
```

### Thunk way

Require [co](https://github.com/visionmedia/co) and node >= `0.11.12`:

```js
var co = require('co');
var gitlab = require('node-gitlab');

var client = gitlab.createThunk({
  api: 'https://gitlab.com/api/v3',
  privateToken: 'your private token'
});

co(function* () {
  var milestones = yield client.milestones.list({id: 1});
})();
```

### Promise way

Require node >= `0.11.13` or [bluebird](https://github.com/petkaantonov/bluebird):

```js
var gitlab = require('node-gitlab');

var client = gitlab.createPromise({
  api: 'https://gitlab.com/api/v3',
  privateToken: 'your private token'
});

client.milestones.list({id: 1})
  .then(function (milestones) {
    console.log(milestones);
  })
  .catch(function (err) {
    throw err;
  });
```

## Document

@see [Gitlab API document](https://github.com/gitlabhq/gitlabhq/tree/master/doc/api).

### Client configuration

Most importantly:

- API version can be set to `v3` or `v4`
- `privateToken` can be found on your [gitlab account page](https://gitlab.com/profile/account)
- `requestTimeout` should be set between 30-60 secs, depending on size/complexity of API calls (such as a huge commit) or server load etc.

```js
module.exports = {
  api: process.env.NODE_GITLAB_API || 'https://gitlab.com/api/v3',
  privateToken: process.env.NODE_GITLAB_TOKEN || 'enEWf516mA168tP6BiVe',
  requestTimeout: 30000,
};
```

### Alternative Gitlab clients

- [gitlab-api-client](https://github.com/kiddouk/gitlab-api-client) a more fluent API
- [nodegit](http://www.nodegit.org/) - general git API client

### Project ID

See [namespaced-path-encoding](https://docs.gitlab.com/ce/api/README.html#namespaced-path-encoding)

## Promise support

All API methods must be added to `properties.json` to be added to promise client (ie. `client.promise`)

## API docs

Please see the [docs]() folder

### Group APIs

- [Groups]()
- [Group members]()

### User APIs

- [Users]()

### Project APIs

- [Deploy Keys]()
- [Hooks]()
- [Issues]()
- [Merge Requests]()
- [Milestones]()
- [Project Members]()
- [Project]()

### Repository APIs

- [Repository Branches]()
- [Repository Files]()
- [Repository]()

### More APIs

See [Gitlab Full API](https://docs.gitlab.com/ee/api/)

*TODO*

- [Issue Boards](https://docs.gitlab.com/ee/api/boards.html)

## License

(The MIT License)

Copyright (c) 2017 Tecla5
Copyright (c) 2015 repo-utils
Copyright (c) 2013 - 2014 fengmk2 <fengmk2@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
