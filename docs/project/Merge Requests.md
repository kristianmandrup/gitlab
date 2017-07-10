# Merge Requests

See [Merge Requests API](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/merge_requests.md)

[Notes on Merge Requests](https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/notes.md#merge-requests)


#### client.mergeRequests.list({id})

Get all merge requests for the project. This function accepts pagination parameters page and per_page to return the list of merge requests.

Parameters:

- `id` (required) - The ID of a project
- `iid` (optional) - Return the request having the given iid
- `state` (optional) - Return all requests or just those that are merged, opened or closed
- `order_by` (optional) - Return requests ordered by created_at or updated_at fields. Default is created_at
- `sort` (optional) - Return requests sorted in asc or desc order. Default is desc

#### client.mergeRequests.get({id, merge_request_id})

Gets a single project merge request.

Parameters:

- `id` (required) - The ID of a project
- `merge_request_id` (required) - The ID of MR


#### client.mergeRequests.create({id, source_branch, target_branch, title})

Creates a new merge request.

Parameters:

- `id` (required) - The ID of a project
- `source_branch` (required) - The source branch
- `target_branch` (required) - The target branch
- `assignee_id` (optional) - Assignee user ID
- `title` (required) - Title of MR
- `description` (optional) - Description of MR
- `target_project_id` (optional) - The target project (numeric id)
- `labels` (optional) - Labels for MR as a comma-separated list
- `milestone_id` (optional) - Milestone ID


If the operation is successful, 200 and the newly created merge request is returned. If an error occurs, an error number and a message explaining the reason is returned.

#### client.mergeRequests.update({id, merge_request_id})

Updates an existing merge request. You can change the target branch, title, or even close the MR.

Parameters:

- `id` (required) - The ID of a project
- `merge_request_id` (required) - ID of MR
- `target_branch` - The target branch
- `assignee_id` - Assignee user ID
- `title` - Title of MR
- `description` - Description of MR
- `state_event` - New state (close|reopen|merge)
- `labels` (optional) - Labels for MR as a comma-separated list
- `milestone_id` (optional) - Milestone ID

If the operation is successful, 200 and the updated merge request is returned. If an error occurs, an error number and a message explaining the reason is returned.

#### client.mergeRequests.merge({id, merge_request_id})

Merge changes submitted with MR using this API.

Parameters:

- `id` (required) - The ID of a project
- `merge_request_id` (required) - ID of MR
- `merge_commit_message` (optional) - Custom merge commit message
- `should_remove_source_branch` (optional) - if true removes the source branch
- `merged_when_build_succeeds` (optional) - if true the MR is merge when the build succeeds

If merge success you get 200 OK.
If it has some conflicts and can not be merged - you get 405 and error message 'Branch cannot be merged'.
If merge request is already merged or closed - you get 405 and error message 'Method Not Allowed'
If you don't have permissions to accept this merge request - you'll get a 401

#### client.mergeRequests.listNotes({id, merge_request_id})

Gets a list of all notes/comments for a single merge request.

Parameters:

- id (required) - The ID of a project
- merge_request_id (required) - The ID of a project merge request


#### client.mergeRequests.getNote({id, merge_request_id, note_id})

Returns a single note for a given merge request.

Parameters:

- id (required) - The ID of a project
- merge_request_id (required) - The ID of a project merge request
- note_id (required) - The ID of a merge request note

#### client.mergeRequests.createNote({id, merge_request_id})

Creates a new note for a single merge request.

Parameters:

- id (required) - The ID of a project
- merge_request_id (required) - The ID of a project merge request
- body (required) - The content of a note

#### client.mergeRequests.updateNote({id, merge_request_id, note_id})

Modify existing note of a merge request.

Parameters:

- id (required) - The ID of a project
- merge_request_id (required) - The ID of a project merge request
- note_id (required) - The ID of a note
- body (required) - The content of a note

#### client.mergeRequests.listCommits({id, merge_request_id})

Gets a list of all commits for a single merge request.

Parameters:

- id (required) - The ID of a project
- merge_request_id (required) - The ID of a project merge request

---
