# Deploy Keys

See [Deploy Keys API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/deploy_keys.md)

#### client.deployKeys.list({id})

Get a list of a project's deploy keys.

Parameters:

* `{String}` `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project


#### client.deployKeys.get({id, key_id})

Gets a project deploy key.

Parameters:

* `{String}` `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
* `{String}` `key_id` (required) - The ID of a key

```json
{
  "id": 1,
  "title": "Public key",
  "key": "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAIEAiPWx6WM4lhHNedGfBpPJNPpZ7yKu+dnn1SJejgt4596k6YjzGGphH2TUxwKzxcKDKKezwkpfnxPkSMkuEspGRt/aZZ9wa++Oi7Qkr8prgHc4soW6NUlfDzpvZK2H5E7eQaSeP3SAwGmQKUFHCddNaP0L+hM7zhFNzjFvpaMgJw0=",
  "created_at": "2013-10-02T10:12:29Z"
}
```

#### client.deployKey.create({id, title, key})

Creates a new deploy key for a project. If deploy key already exists in another project - it will be joined to project but only if original one was is accessible by same user

Parameters:

* `{String}` `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
* `{String}` `title` (required) - New deploy key's title
* `{String}` `key` (required) - New deploy key

#### client.deployKeys.remove({id, key_id})

Delete a deploy key from a project.

Parameters:

* `{String}` `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
* `{String}` `key_id` (required) - The ID of the deploy key

---
