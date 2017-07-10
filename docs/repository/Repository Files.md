# Repository Files

See [Repository Files API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/repository_files.md)

#### client.repositoryFiles.get({id, file_path, ref})

Get file from repository.
Allows you to receive information about file in repository like name, size, content.
Note that file content is Base64 encoded.

```json
{
  "file_name": "key.rb",
  "file_path": "app/models/key.rb",
  "size": 1476,
  "encoding": "base64",
  "content": "IyA9PSBTY2hlbWEgSW5mb3...",
  "ref": "master",
  "blob_id": "79f7bbd25901e8334750839545a9bd021f0e4c83",
  "commit_id": "d5a3ff139356ce33e37e73add446f16869741b50"
}
```

Parameters:

* {String} file_path (required) - Full path to new file. Ex. lib/class.rb
* {String} ref (required) - The name of branch, tag or commit

#### client.repositoryFiles.create({id, file_path, branch_name, encoding, content, commit_message})

Create new file in repository

Parameters:

* {String} file_path (required) - Full path to new file. Ex. lib/class.rb
* {String} branch_name (required) - The name of branch
* {String} encoding (optional) - 'text' or 'base64'. Text is default.
* {String} content (required) - File content
* {String} commit_message (required) - Commit message

#### client.repositoryFiles.update({id, file_path, branch_name, encoding, content, commit_message})

Update existing file in repository

Parameters:

* {String} file_path (required) - Full path to new file. Ex. lib/class.rb
* {String} branch_name (required) - The name of branch
* {String} encoding (optional) - 'text' or 'base64'. Text is default.
* {String} content (required) - New file content
* {String} commit_message (required) - Commit message

#### client.repositoryFiles.remove({id, file_path, branch_name, commit_message})

Delete existing file in repository

Parameters:

* {String} file_path (required) - Full path to new file. Ex. lib/class.rb
* {String} branch_name (required) - The name of branch
* {String} commit_message (required) - Commit message
