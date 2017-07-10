# Groups

See [Groups API](https://docs.gitlab.com/ee/api/groups.html)

```js
let group = Group(client)
```

## group.list({id})

Get a list of projects in this group.

### Usage

```js
group.list({id}, cb)
// or
await group.client.list({id})
```

### Params

* `id` group id

## group.details({id})

Get all details of a group.

### Usage

```js
group.details(params, cb)
// or
await group.client.details(params)
```

### Params

* `id` group id

## group.search()

Search projects in this group matching on name (or path)

### Usage

```js
group.search(params, cb)
// or
await group.client.search({query: 'tecla'})
```

### Params

* `query` search string

## group.create({id})

Creates a new project group. Available only for users who can create groups.

### Usage

```js
group.create(params, cb)
// or
await group.client.create(params)
```

### Params

 * `name` (required) - The name of the group
 * `path` (required) - The path of the group
 * `description` (optional) - The group's description
 * `membership_lock` (optional, boolean) - Prevent adding new members to project membership within this group
 * `share_with_group_lock` (optional, boolean) - Prevent sharing a project with another group within this group
 * `visibility` (optional) - The group's visibility. Can be private, internal, or public.
 * `lfs_enabled` (optional) - Enable/disable Large File Storage (LFS) for the projects in this group
 * `request_access_enabled` (optional) - Allow users to request member access.
 * `parent_id` (optional) - The parent group id for creating nested group.
 * `shared_runners_minutes_limit` (optional) - (admin-only) Pipeline minutes quota for this group

## group.update({id, name, ...})

Updates the project group. Only available to group owners and administrators.

### Usage

```js
group.update(params, cb)
// or
await group.client.update(params)
```

### Params

 * `id` group id
 * `name` (required) - The name of the group
 * `path` (required) - The path of the group
 * `description` (optional) - The group's description
 * `membership_lock` (optional, boolean) - Prevent adding new members to project membership within this group
 * `share_with_group_lock` (optional, boolean) - Prevent sharing a project with another group within this group
 * `visibility` (optional) - The group's visibility. Can be private, internal, or public.
 * `lfs_enabled` (optional) - Enable/disable Large File Storage (LFS) for the projects in this group
 * `request_access_enabled` (optional) - Allow users to request member access.
 * `parent_id` (optional) - The parent group id for creating nested group.
 * `shared_runners_minutes_limit` (optional) - (admin-only) Pipeline minutes quota for this group

## group.remove({id})

Removes group with all projects inside.

### Usage

```js
group.remove(params, cb)
// or
await group.client.remove(params)
```

### Params

* `id` group id

## group.transferProject({id, project_id})

Transfer a project to the Group namespace. Available only for admin

### Usage

```js
let group = Group(client)
group.transferProject(params, cb)

// or
await group.promise.transferProject(params)
```

### Params

* `id` group id
* `project_id` project id
