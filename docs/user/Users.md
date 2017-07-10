# Users

See [Users API](https://docs.gitlab.com/ee/api/users.html)

```js
let user = User(client)
```

## user.list()

Get a list users

### Usage

Note: Calls `filter` without any criteria

```js
user.list(cb)
// or
await user.client.list({id})
```

### Params

* `id` user id

## user.details({id})

Get all details of a user.

### Usage

```js
user.details(params, cb)
// or
await user.client.details(params)
```

### Params

* `id` user id

## user.filter()

Filter users on criteria

### Usage

```js
let criteria = {
  active: true,
  blocked: false
}

// alias: search
user.filter({criteria}, cb)
// or
await user.client.filter({criteria})
```

### Params

* `criteria` filter criteria object (will be stringified to a valid query string)

## user.details({id, user_id})

Gets details of a user

### Usage

```js
// alias: info
user.details({id}, cb)
// or
await user.client.details({id})
```

### Params

* `id` user id
* `user_id` user id

## user.create(params)

Creates (adds) a user

### Usage

```js
// alias: add
user.create({
  email,
  name,
  // ...
}, cb)

// or
await user.client.create({
  email,
  name,
  // ...
})
```

### Params

- `email` (required) - Email
- `password` (optional) - Password
- `reset_password` (optional) - Send user password reset link - true or false(default)
- `username` (required) - Username
- `name` (required) - Name
- `skype` (optional) - Skype ID
- `linkedin` (optional) - LinkedIn
- `twitter` (optional) - Twitter account
- `website_url` (optional) - Website URL
- `organization` (optional) - Organization name
- `projects_limit` (optional) - Number of projects user can create
- `extern_uid` (optional) - External UID
- `provider` (optional) - External provider name
- `bio` (optional) - User's biography
- `location` (optional) - User's location
- `admin` (optional) - User is admin - true or false (default)
- `can_create_user` (optional) - User can create users - true or false
- `confirm` (optional) - Require confirmation - true (default) or false
- `external` (optional) - Flags the user as external - true or false(default)
- `shared_runners_minutes_limit` (optional) - Pipeline minutes quota for this user
- `avatar` (optional) - Image file for user's avatar

## user.update({id, user_id})

Updates a user

### Usage

```js
user.update({id, name, ...}, cb)
// or
await user.client.update({id, name, ...})
```

### Params

* `id` (required) user id
- `email` (required) - Email
- `password` (optional) - Password
- `reset_password` (optional) - Send user password reset link - true or false(default)
- `username` (required) - Username
- `name` (required) - Name
- `skype` (optional) - Skype ID
- `linkedin` (optional) - LinkedIn
- `twitter` (optional) - Twitter account
- `website_url` (optional) - Website URL
- `organization` (optional) - Organization name
- `projects_limit` (optional) - Number of projects user can create
- `extern_uid` (optional) - External UID
- `provider` (optional) - External provider name
- `bio` (optional) - User's biography
- `location` (optional) - User's location
- `admin` (optional) - User is admin - true or false (default)
- `can_create_user` (optional) - User can create users - true or false
- `confirm` (optional) - Require confirmation - true (default) or false
- `external` (optional) - Flags the user as external - true or false(default)
- `shared_runners_minutes_limit` (optional) - Pipeline minutes quota for this user
- `avatar` (optional) - Image file for user's avatar

## user.remove({id})

Removes a user

### Usage

```js
// alias: delete
user.remove({id}, cb)
// or
await user.client.remove({id})
```

### Params

* `id` (required) user id
