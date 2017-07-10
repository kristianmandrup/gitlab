# Repository

- `getBranches`
- `protectBranch`
- `unprotectBranch`
- `getBranch`
- `getTags`
- `getCommits`
- `getCommit`
- `getTree`
- `getBlob`
- `getRawBlob`
- `createTag`
- `commitActions`
- `getDiff`
- `archive`
- `compare`

### list

Generic method to list items of repository, here the file tree via `type: 'tree'`

```js
client.repository.list({
  id: client.id,
  type: 'tree'
}, function (err, tree) {
  // ...
})
```

### getBranches

Get all branches of project/repository

```js
client.repository.getBranches({
  id: client.id
}, function (err, branches) {
  // ...
})
```

### protectBranch

Protect specific branch

```js
client.repository.protectBranch({
  id: client.id,
  branch: 'master'
}, function (err, branch) {
  // ...
})
```

### unprotectBranch

Remove protection of specific branch

```js
client.repository.unprotectBranch({
  id: client.id,
  branch: 'master'
}, function (err, branch) {
  // ...
})
```

### getBranch

Get specific branch of project/repository

```js
client.repository.getBranch({
  id: client.id,
  branch: 'master'
}, function (err, branch) {
  // ...
})
```

### getTags

Get all tags of project/repository

```js
client.repository.getTags({
  id: client.id
}, function (err, tags) {
  // ...
})
```

### getCommits

Get all commits of project/repository

```js
client.repository.getCommits({
  id: client.id
}, function (err, commits) {
  // ...
})
```

### getCommit

Get specific commit

```js
client.repository.getCommit({
  id: 55045,
  sha: '946579807281bd26b75b91986c78f15ad0bd40f7'
}, function (err, raw) {
  // ...
})
```

### getTree

Get the full file tree

```js
client.repository.getTree({
  id: client.id
}, function (err, tree) {
  // ...
})
```

Get tree for specific `path`

```js
let res = await client.promise.repository.getTree({
  id: client.id,
  path: 'lib'
})
```

### getBlob

Get specific blob

```js
client.repository.getBlob({
  id: client.id,
  sha: 'master',
  filepath: 'lib/alidata.js'
}, function (err, blob) {
  // ...
})
```

### getRawBlob

Get specific *raw* blob

```js
client.repository.getRawBlob({
  id: 55045,
  sha: '946579807281bd26b75b91986c78f15ad0bd40f7'
}, function (err, raw) {
  // ...
})
```

### createTag

Create tag

```js
client.repository.createTag({
  id: 55045,
  tag_name: 'develop',
  ref: '946579807281bd26b75b91986c78f15ad0bd40f7',
  message: 'dev branch',
  release_description: 'wip'
}, function (err, raw) {
  // ...
})
```

### commitActions

[Create a commit with multiple files and actions](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/commits.md#create-a-commit-with-multiple-files-and-actions)

The raw HTTP POST format (v4 API)

```
PAYLOAD=$(cat << 'JSON'
{
  "branch": "master",
  "commit_message": "some commit message",
  "actions": [
    {
      "action": "create",
      "file_path": "foo/bar",
      "content": "some content"
    },
  ]
}
JSON
)
curl --request POST --header "PRIVATE-TOKEN: FTwjsMxf9yTg23sLd9bp" --header "Content-Type: application/json" --data "$PAYLOAD" https://gitlab.com//api/v4/projects/3339054/repository/commits
```

Notice the HTTP `headers` section:

`--header "PRIVATE-TOKEN: FTwjsMxf9yTg23sLd9bp" --header "Content-Type: application/json"`

With `update`, `move` and `delete` actions:

```
{
  "action": "delete",
  "file_path": "foo/bar2",
},
{
  "action": "move",
  "file_path": "foo/bar3",
  "previous_path": "foo/bar4",
  "content": "some content"
},
{
  "action": "update",
  "file_path": "foo/bar5",
  "content": "new content"
}
```

See tests in `/test/repository`

```js
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
  // ...
})
```

### getDiff

Get diff (commit vs commit comparison)

```js
client.repository.getDiff({
  id: 55045,
  sha: '946579807281bd26b75b91986c78f15ad0bd40f7'
}, function (err, raw) {
  // ...
})
```

### archive

Get archive file

```js
client.repository.archive({
  id: 55045,
  sha: '946579807281bd26b75b91986c78f15ad0bd40f7'
}, function (err, raw) {
  // ...
})
```

### compare

Get diffs

```js
client.repository.compare({
  id: 55045,
  to: 'master',
  from: '946579807281bd26b75b91986c78f15ad0bd40f7'
}, function (err, diffs) {
  // ...
})
```
