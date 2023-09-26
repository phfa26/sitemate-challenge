# CLI and Server Applications Documentation

This documentation provides an overview of both the CLI (Command Line Interface) and server applications. It includes details about the capabilities of each application and instructions on how to use the CLI app and set up the server locally.

## Server Application

### Capabilities

The server application is a RESTful API server with the following capabilities for managing issues:

- **Create**: Create a new issue by sending a JSON object.
- **Read All**: Retrieve a list of all issues.
- **Read by ID**: Retrieve a single issue by its ID.
- **Update by ID**: Update an existing issue by its ID.
- **Delete by ID**: Delete an issue by its ID.

### Setting Up the Server Locally

To set up the server application locally, follow these steps:

1. Clone the server application repository from GitHub:

```bash
   git clone git@github.com:phfa26/sitemate-challenge.git
```

### Getting started

Navigate to the server application directory:

```bash
    Copy code
    cd <server_directory>
```

Install the required dependencies:

```bash
    Copy code
    npm install
    Start the server:
```

```bash
Copy code
npm start
```

The server should now be running locally at http://localhost:3000.

### CLI Application

Capabilities
The CLI application interacts with the server API and supports the following commands:

Create: Create a new issue by providing a title and description.
Read All: Retrieve a list of all issues.
Read by ID: Retrieve a single issue by its ID.
Update by ID: Update an existing issue by its ID with a new title and description.
Delete by ID: Delete an issue by its ID.
Using the CLI Application
To use the CLI application, follow these instructions:


#### Create an Issue:
```bash
ts-node my-cli-app.ts create "Title" "Description"
```

#### Read All Issues:
```bash
ts-node my-cli-app.ts read-all
```
#### Read an Issue by ID:

```bash
ts-node my-cli-app.ts read <issue_id>
```

#### Update an Issue by ID:
```bash
ts-node my-cli-app.ts update <issue_id> "New Title" "New Description"
```

#### Delete an Issue by ID:
```bash
ts-node my-cli-app.ts delete <issue_id>
```

