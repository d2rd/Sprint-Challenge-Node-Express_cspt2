

## DESIGN
* File structure
    src
      actions
        index.js
      components
        ProjectForm.js
        Projects.js
        UpdateProjectForm.js
      reducers
        projectsReducer.js
        singleProjectReducer.js


## DATABASE SCHEMAS

# Projects
  * id: number, no need to provide it when creating projects, the database will generate it.

  * name: string, up to 128 characters long, required.

  * description: string, no size limit, required.

  * completed: boolean to indicate if the project has been completed, not required

# Actions

  * id: number, no need to provide it when creating posts, the database will automatically generate it.

  * project_id: number, required, must be the id of an existing project.

  * description: string, up to 128 characters long, required.

  * notes: string, no size limit, required. Used to record additional notes or requirements to complete the action.

  * completed: boolean to indicate if the action has been completed, not required

## HTTP REQUESTS
* GET (READ)

* INSERT (POST)

* UPDATE (PUT)

* REMOVE (DELETE)

## ACTIONS
* db Functions
`get()`
`insert()`
`update()`
`remove()`