# Groups

See [Group members API](https://docs.gitlab.com/ee/api/members.html)

## group.members({id})

Gets a list of group members viewable by the authenticated user.

### Usage

```js
group.members({id}, cb)
// or
await group.client.members({id})
```

### Params

* `id` group id

## group.member({id, user_id})

Gets a member of a group

### Usage

```js
group.member({id, user_id}, cb)
// or
await group.client.member({id, user_id})
```

### Params

* `id` group id
* `user_id` user id

## group.addMember({id, user_id})

Adds a member to a group

### Usage

```js
group.addMember({id, user_id}, cb)
// or
await group.client.addMember({id, user_id})
```

### Params

* `id` (required) group id
* `user_id` (required) user id
* `access_level` (required) a valid access level (integer)
* `expires_at` (optional) a date string in the format YEAR-MONTH-DAY

## group.updateMember({id, user_id})

Updates a member of a group

### Usage

```js
group.updateMember({id, user_id}, cb)
// or
await group.client.updateMember({id, user_id})
```

### Params

* `id` (required) group id
* `user_id` (required) user id
* `access_level` (required) a valid access level (integer)
* `expires_at` (optional) a date string in the format YEAR-MONTH-DAY

## group.removeMember({id, user_id})

Removes a user from a group

### Usage

```js
group.removeMember({id, user_id}, cb)
// or
await group.client.removeMember({id, user_id})
```

### Params

* `id` (required) group id
* `user_id` (required) user id
