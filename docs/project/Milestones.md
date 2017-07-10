# Milestones

See [Milestones API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/milestones.md)

#### client.milestones.list({id})

Returns a list of project milestones.

```json
[
  {
    "id": 12,
    "iid": 3,
    "project_id": 16,
    "title": "10.0",
    "description": "Version",
    "due_date": "2013-11-29",
    "state": "active",
    "updated_at": "2013-10-02T09:24:18Z",
    "created_at": "2013-10-02T09:24:18Z"
  }
]
```

Parameters:

- {String} id (required) - The ID of a project
- {String} iid (optional) - Return the milestone having the given iid

#### client.milestones.get({id, milestone_id})

Gets a single project milestone.

Parameters:

- {String} id (required) - The ID of a project
- {String} milestone_id (required) - The ID of a project milestone

#### client.milestones.create({id, title, description, due_date})

Creates a new project milestone.

Parameters:

- {String} id (required) - The ID of a project
- {String} title (required) - The title of an milestone
- {String} description (optional) - The description of the milestone
- {String} due_date (optional) - The due date of the milestone

#### client.milestones.update({id, milestone_id, title, description, due_date})

Updates an existing project milestone.

Parameters:

- {String} id (required) - The ID of a project
- {String} milestone_id (required) - The ID of a project milestone
- {String} title (optional) - The title of a milestone
- {String} description (optional) - The description of a milestone
- {String} due_date (optional) - The due date of the milestone
- {String} state_event (optional) - The state event of the milestone (`close`|`activate`)

#### client.milestones.listIssues({id, milestone_id})

Gets all issues assigned to a single project milestone.

Parameters:

- {String} id (required) - The ID of a project
- {String} milestone_id (required) - The ID of a project milestone
