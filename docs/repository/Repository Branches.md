# Repository Branches

See [Repository Branches](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/projects.md#branches)

#### client.repositoryBranches.list({id})

Lists all branches of a project.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project

```json
[
  {
    "name": "async",
    "commit": {
      "id": "a2b702edecdf41f07b42653eb1abe30ce98b9fca",
      "parents": [
        {
          "id": "3f94fc7c85061973edc9906ae170cc269b07ca55"
        }
      ],
      "tree": "c68537c6534a02cc2b176ca1549f4ffa190b58ee",
      "message": "give Caolan credit where it's due (up top)",
      "author": {
        "name": "Jeremy Ashkenas",
        "email": "jashkenas@example.com"
      },
      "committer": {
        "name": "Jeremy Ashkenas",
        "email": "jashkenas@example.com"
      },
      "authored_date": "2010-12-08T21:28:50+00:00",
      "committed_date": "2010-12-08T21:28:50+00:00"
    },
    "protected": false
  },
  {
    "name": "gh-pages",
    "commit": {
      "id": "101c10a60019fe870d21868835f65c25d64968fc",
      "parents": [
        {
          "id": "9c15d2e26945a665131af5d7b6d30a06ba338aaa"
        }
      ],
      "tree": "fb5cc9d45da3014b17a876ad539976a0fb9b352a",
      "message": "Underscore.js 1.5.2",
      "author": {
        "name": "Jeremy Ashkenas",
        "email": "jashkenas@example.com"
      },
      "committer": {
        "name": "Jeremy Ashkenas",
        "email": "jashkenas@example.com"
      },
      "authored_date": "2013-09-07T12: 58: 21+00: 00",
      "committed_date": "2013-09-07T12: 58: 21+00: 00"
    },
    "protected": false
  }
]
```

#### client.repositoryBranches.get({id, branch})

Lists a specific branch of a project.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `branch` (required) - The name of the branch.

#### client.repositoryBranches.create({id, branch_name, ref})

Create a repository branch on a project.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `branch_name` (required) - The name of the branch.
- `ref` (required) - Create branch from commit SHA or existing branch.

#### client.repositoryBranches.remove({id, branch})

Delete repository branch

Parameters:

- `id` (required) - The ID of a project
- `branch` (required) - The name of the branch

It return 200 if succeed, 404 if the branch to be deleted does not exist or 400 for other reasons.
In case of an error, an explaining message is provided.

Success response:

```json
{
  "branch_name": "my-removed-branch"
}
```

#### client.repositoryBranches.protect({id, branch})

Protects a single branch of a project.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `branch` (required) - The name of the branch.

#### client.repositoryBranches.unprotect({id, branch})

Unprotects a single branch of a project.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `branch` (required) - The name of the branch.

---
