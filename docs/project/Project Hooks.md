# Hooks

See [Hooks API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/projects.md#hooks)

#### client.hooks.list({id})

Get a list of project hooks.

Parameters:

- {String} `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project

#### client.hooks.get({id, hook_id})

Get a specific hook for a project.

```json
{
  "id": 1,
  "url": "http://example.com/hook",
  "project_id": 3,
  "push_events": "true",
  "issues_events": "true",
  "merge_requests_events": "true",
  "created_at": "2012-10-12T17:04:47Z"
}
```

Parameters:

* {String} `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
* {String} `hook_id` (required) - The ID of a project hook

#### client.hooks.create({id, url, push_events, issues_events, merge_requests_events, tag_push_events})

Adds a hook to a specified project.

Parameters:

* {String} `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
* {String} `url` (required) - The hook URL
* {Boolean} `push_events` - Trigger hook on push events, default is `true`
* {Boolean} `issues_events` - Trigger hook on issues events
* {Boolean} `merge_requests_events` - Trigger hook on merge_requests events
* {Boolean} `tag_push_events` - Trigger hook on push_tag events

#### client.hooks.update({id, hook_id, url, push_events, issues_events, merge_requests_events, tag_push_events})

Edits a hook for a specified project.

Parameters:

* {String} `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
* {String} `hook_id` (required) - The ID of a project hook
* {String} `url` (required) - The hook URL
* {Boolean} `push_events` - Trigger hook on push events, default is `true`
* {Boolean} `issues_events` - Trigger hook on issues events
* {Boolean} `merge_requests_events` - Trigger hook on merge_requests events
* {Boolean} `tag_push_events` - Trigger hook on push_tag events

#### client.hooks.remove({id, hook_id})

Removes a hook from a project. This is an idempotent method and can be called multiple times. Either the hook is available or not.

Parameters:

* {String} id (required) - The ID or NAMESPACE/PROJECT_NAME of a project
* {String} hook_id (required) - The ID of a project hook
