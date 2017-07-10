# Projects

See [Projects API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/projects.md)

#### client.projects.list({archived, order_by, sort, search, ci_enabled_first})

Get a list of projects accessible by the authenticated user.

Parameters:

- `archived` (optional) - if passed, limit by archived status
- `order_by` (optional) - Return requests ordered by `id`, `name`, `path`, `created_at`, `updated_at` or `last_activity_at` fields. Default is `created_at`
- `sort` (optional) - Return requests sorted in `asc` or `desc` order. Default is `desc`
- `search` (optional) - Return list of authorized projects according to a search criteria
- `ci_enabled_first` - Return projects ordered by ci_enabled flag. Projects with enabled GitLab CI go first

```json
[
  {
    "id": 4,
    "description": null,
    "default_branch": "master",
    "public": false,
    "visibility_level": 0,
    "ssh_url_to_repo": "git@example.com:diaspora/diaspora-client.git",
    "http_url_to_repo": "http://example.com/diaspora/diaspora-client.git",
    "web_url": "http://example.com/diaspora/diaspora-client",
    "tag_list": [
      "example",
      "disapora client"
    ],
    "owner": {
      "id": 3,
      "name": "Diaspora",
      "created_at": "2013-09-30T13: 46: 02Z"
    },
    "name": "Diaspora Client",
    "name_with_namespace": "Diaspora / Diaspora Client",
    "path": "diaspora-client",
    "path_with_namespace": "diaspora/diaspora-client",
    "issues_enabled": true,
    "merge_requests_enabled": true,
    "wiki_enabled": true,
    "snippets_enabled": false,
    "created_at": "2013-09-30T13: 46: 02Z",
    "last_activity_at": "2013-09-30T13: 46: 02Z",
    "creator_id": 3,
    "namespace": {
      "created_at": "2013-09-30T13: 46: 02Z",
      "description": "",
      "id": 3,
      "name": "Diaspora",
      "owner_id": 1,
      "path": "diaspora",
      "updated_at": "2013-09-30T13: 46: 02Z"
    },
    "archived": false,
    "avatar_url": "http://example.com/uploads/project/avatar/4/uploads/avatar.png"
  },
  // ...
]
```

#### client.projects.get({id})

Get a specific project

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project

```json
{
  "id": 3,
  "description": null,
  "default_branch": "master",
  "public": false,
  "visibility_level": 0,
  "ssh_url_to_repo": "git@example.com:diaspora/diaspora-project-site.git",
  "http_url_to_repo": "http://example.com/diaspora/diaspora-project-site.git",
  "web_url": "http://example.com/diaspora/diaspora-project-site",
  "tag_list": [
    "example",
    "disapora project"
  ],
  "owner": {
    "id": 3,
    "name": "Diaspora",
    "created_at": "2013-09-30T13: 46: 02Z"
  },
  "name": "Diaspora Project Site",
  "name_with_namespace": "Diaspora / Diaspora Project Site",
  "path": "diaspora-project-site",
  "path_with_namespace": "diaspora/diaspora-project-site",
  "issues_enabled": true,
  "merge_requests_enabled": true,
  "wiki_enabled": true,
  "snippets_enabled": false,
  "created_at": "2013-09-30T13: 46: 02Z",
  "last_activity_at": "2013-09-30T13: 46: 02Z",
  "creator_id": 3,
  "namespace": {
    "created_at": "2013-09-30T13: 46: 02Z",
    "description": "",
    "id": 3,
    "name": "Diaspora",
    "owner_id": 1,
    "path": "diaspora",
    "updated_at": "2013-09-30T13: 46: 02Z"
  },
  "permissions": {
    "project_access": {
      "access_level": 10,
      "notification_level": 3
    },
    "group_access": {
      "access_level": 50,
      "notification_level": 3
    }
  },
  "archived": false,
  "avatar_url": "http://example.com/uploads/project/avatar/3/uploads/avatar.png"
}
```

#### client.projects.create({name, path, namespace_id, description, issues_enabled, merge_requests_enabled,
  wiki_enabled, snippets_enabled, public, visibility_level, import_url})

Creates a new project owned by the authenticated user.

Parameters:

- `name` (required) - new project name
- `path` (optional) - custom repository name for new project. By default generated based on name
- `namespace_id` (optional) - namespace for the new project (defaults to user)
- `description` (optional) - short project description
- `issues_enabled` (optional)
- `merge_requests_enabled` (optional)
- `wiki_enabled` (optional)
- `snippets_enabled` (optional)
- `public` (optional) - if true same as setting visibility_level = 20
- `visibility_level` (optional)
- `import_url` (optional)

#### client.projects.update({id, path, namespace_id, description, default_branch, issues_enabled, merge_requests_enabled,
  wiki_enabled, snippets_enabled, public, visibility_level})

Updates an existing project

Parameters:

- `id` (required) - The ID of a project
- `name` (optional) - project name
- `path` (optional) - repository name for project
- `description` (optional) - short project description
- `default_branch` (optional)
- `issues_enabled` (optional)
- `merge_requests_enabled` (optional)
- `wiki_enabled` (optional)
- `snippets_enabled` (optional)
- `public` (optional) - if true same as setting visibility_level = 20
- `visibility_level` (optional)

On success, method returns 200 with the updated project. If parameters are invalid, 400 is returned.

#### client.projects.remove({id})

Removes a project including all associated resources (issues, merge requests etc.)

Parameters:

- `id` (required) - The ID of a project

#### client.projects.search({query, per_page, page, order_by, sort})

Search for projects by name which are accessible to the authenticated user.

Parameters:

- `query` (required) - A string contained in the project name
- `per_page` (optional) - number of projects to return per page
- `page` (optional) - the page to retrieve
- `order_by` (optional) - Return requests ordered by `id`, `name`, `created_at` or `last_activity_at` fields
- `sort` (optional) - Return requests sorted in `asc` or `desc` order

#### client.projects.fork({id})

Forks a project into the user namespace of the authenticated user.

Parameters:

- `id` (required) - The ID of the project to be forked

#### client.projects.listEvents({id})

Get the events for the specified project. Sorted from newest to latest

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project

```json
[
  {
    "title": null,
    "project_id": 15,
    "action_name": "closed",
    "target_id": 830,
    "target_type": "Issue",
    "author_id": 1,
    "author_username": "john",
    "data": null,
    "target_title": "Public project search field"
  },
  {
    "title": null,
    "project_id": 15,
    "action_name": "opened",
    "target_id": null,
    "target_type": null,
    "author_id": 1,
    "author_username": "john",
    "data": {
      "before": "50d4420237a9de7be1304607147aec22e4a14af7",
      "after": "c5feabde2d8cd023215af4d2ceeb7a64839fc428",
      "ref": "refs/heads/master",
      "user_id": 1,
      "user_name": "Dmitriy Zaporozhets",
      "repository": {
        "name": "gitlabhq",
        "url": "git@dev.gitlab.org:gitlab/gitlabhq.git",
        "description": "GitLab: self hosted Git management software. \r\nDistributed under the MIT License.",
        "homepage": "https://dev.gitlab.org/gitlab/gitlabhq"
      },
      "commits": [
        {
          "id": "c5feabde2d8cd023215af4d2ceeb7a64839fc428",
          "message": "Add simple search to projects in public area",
          "timestamp": "2013-05-13T18:18:08+00:00",
          "url": "https://dev.gitlab.org/gitlab/gitlabhq/commit/c5feabde2d8cd023215af4d2ceeb7a64839fc428",
          "author": {
            "name": "Dmitriy Zaporozhets",
            "email": "dmitriy.zaporozhets@gmail.com"
          }
        }
      ],
      "total_commits_count": 1
    },
    "target_title": null
  },
  {
    "title": null,
    "project_id": 15,
    "action_name": "closed",
    "target_id": 840,
    "target_type": "Issue",
    "author_id": 1,
    "author_username": "john",
    "data": null,
    "target_title": "Finish & merge Code search PR"
  }
]
```

#### client.projects.getLabels({id})

Get the labels for the specified project.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project

```json
[
  { "name": "Bug", color: "#A8D695" },
  { "name": "Feature", color: "#5CB85C" }
]
```

#### client.projects.createLabel({id, name, color})

Create a label for the specified project.

Parameters:

- `id` (required) - The ID of a project
- `name` (required) - The name of the label
- `color` (required) - Color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)

```json
[
  { "name": "Bug", color: "#A8D695" },
  { "name": "Feature", color: "#5CB85C" }
]
```

#### client.projects.updateLabel({id, name, new_name, color})

Update a label for the specified project.

Parameters:

- `id` (required) - The ID of a project
- `name` (required) - The name of the existing label
- `new_name` (optional) - The new name of the label
- `color` (optional) - New color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)

#### client.projects.deleteLabel({id, name})

Delete a label for the specified project.

Parameters:

- `id` (required) - The ID of a project
- `name` (required) - The name of the label to be deleted

---
