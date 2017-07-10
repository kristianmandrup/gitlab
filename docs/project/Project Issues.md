# Issues

See [Issues API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/issues.md)

#### client.issues.list({id})

Get a list of project issues. This function accepts pagination parameters page and per_page to return the list of project issues.

Parameters:

- `id` (required) - The ID of a project
- `iid` (optional) - Return the issue having the given `iid`
- `state` (optional) - Return `all` issues or just those that are `opened` or `closed`
- `labels` (optional) - Comma-separated list of label names
- `milestone` (optional) - Milestone title
- `order_by` (optional) - Return requests ordered by `created_at` or `updated_at` fields. Default is `created_at`
- `sort` (optional) - Return requests sorted in `asc` or `desc` order. Default is `desc`

#### client.issues.get({id, issue_id})

Gets a single project issue.

Parameters:

- `id` (required) - The ID of a project
- `issue_id` (required) - The ID of a project issue

```json
{
  "id": 42,
  "iid": 3,
  "project_id": 8,
  "title": "Add user settings",
  "description": "",
  "labels": [
    "feature"
  ],
  "milestone": {
    "id": 1,
    "title": "v1.0",
    "description": "",
    "due_date": "2012-07-20",
    "state": "closed",
    "updated_at": "2012-07-04T13:42:48Z",
    "created_at": "2012-07-04T13:42:48Z"
  },
  "assignee": {
    "id": 2,
    "username": "jack_smith",
    "email": "jack@example.com",
    "name": "Jack Smith",
    "state": "active",
    "created_at": "2012-05-23T08:01:01Z"
  },
  "author": {
    "id": 1,
    "username": "john_smith",
    "email": "john@example.com",
    "name": "John Smith",
    "state": "active",
    "created_at": "2012-05-23T08:00:58Z"
  },
  "state": "opened",
  "updated_at": "2012-07-12T13:43:19Z",
  "created_at": "2012-06-28T12:58:06Z"
}
```

#### client.issues.create({id, title, description, assignee_id, milestone_id, labels})

Creates a new project issue.

Parameters:

- `id` (required) - The ID of a project
- `title` (required) - The title of an issue
- `description` (optional) - The description of an issue
- `assignee_id` (optional) - The ID of a user to assign issue
- `milestone_id` (optional) - The ID of a milestone to assign issue
- `labels` (optional) - Comma-separated label names for an issue

If the operation is successful, 200 and the newly created issue is returned. If an error occurs, an error number and a message explaining the reason is returned.

#### client.issues.update({id, issue_id, title, description, assignee_id, milestone_id, labels})

Updates an existing project issue. This function is also used to mark an issue as closed.

Parameters:

- `id` (required) - The ID of a project
- `issue_id` (required) - The ID of a project's issue
- `title` (optional) - The title of an issue
- `description` (optional) - The description of an issue
- `assignee_id` (optional) - The ID of a user to assign issue
- `milestone_id` (optional) - The ID of a milestone to assign issue
- `labels` (optional) - Comma-separated label names for an issue
- `state_event` (optional) - The state event of an issue ('close' to close issue and 'reopen' to reopen it)

If the operation is successful, 200 and the updated issue is returned. If an error occurs, an error number and a message explaining the reason is returned.

#### client.issues.listNotes({id, issue_id})

Gets a list of all notes for a single issue.

Parameters:

- `id` (required) - The ID of a project
- `issue_id` (required) - The ID of an issue

```json
[
  {
    "id": 302,
    "body": "Status changed to closed",
    "attachment": null,
    "author": {
      "id": 1,
      "username": "pipin",
      "email": "admin@example.com",
      "name": "Pip",
      "state": "active",
      "created_at": "2013-09-30T13:46:01Z"
    },
    "created_at": "2013-10-02T09:22:45Z"
  },
  {
    "id": 305,
    "body": "Text of the comment\r\n",
    "attachment": null,
    "author": {
      "id": 1,
      "username": "pipin",
      "email": "admin@example.com",
      "name": "Pip",
      "state": "active",
      "created_at": "2013-09-30T13:46:01Z"
    },
    "created_at": "2013-10-02T09:56:03Z"
  }
]
```

#### client.issues.getNote({id, issue_id, note_id})

Returns a single note for a specific project issue

Parameters:

- `id` (required) - The ID of a project
- `issue_id` (required) - The ID of a project issue
- `note_id` (required) - The ID of an issue note

#### client.issues.createNote({id, issue_id})

Creates a new note to a single project issue.

Parameters:

- `id` (required) - The ID of a project
- `issue_id` (required) - The ID of an issue
- `body` (required) - The content of a note

#### client.issues.updateNote({id, issue_id, note_id})

Modify existing note of an issue.

Parameters:

- `id` (required) - The ID of a project
- `issue_id` (required) - The ID of a project issue
- `note_id` (required) - The ID of an issue note
- `body` (required) - The content of a note

---
