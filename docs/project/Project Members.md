# Project Members

See [Project Members API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/projects.md#team-members)

#### client.projectMembers.list({id})

Get a list of a project's team members.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `query` (optional) - Query string to search for members

#### client.projectMembers.get({id, user_id})

Gets a project team member.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `user_id` (required) - The ID of a user

```json
{
  "id": 1,
  "username": "john_smith",
  "email": "john@example.com",
  "name": "John Smith",
  "state": "active",
  "created_at": "2012-05-23T08:00:58Z",
  "access_level": 40
}
```

#### client.projectMembers.create({id, user_id, access_level})

Adds a user to a project team. This is an idempotent method and can be called multiple times with the same parameters. Adding team membership to a user that is already a member does not affect the existing membership.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `user_id` (required) - The ID of a user to add
- `access_level` (required) - Project access level

#### client.projectMembers.update({id, user_id, access_level})

Updates a project team member to a specified access level.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `user_id` (required) - The ID of a team member
- `access_level` (required) - Project access level

#### client.projectMembers.remove({id, user_id})

Removes a user from a project team.

Parameters:

- `id` (required) - The ID or NAMESPACE/PROJECT_NAME of a project
- `user_id` (required) - The ID of a team member

This method is idempotent and can be called multiple times with the same parameters. Revoking team membership for a user who is not currently a team member is considered success. Please note that the returned JSON currently differs slightly. Thus you should not rely on the returned JSON structure.

