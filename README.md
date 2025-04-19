# Peakplan

Peakplan is a web application for planning and tracking personal tasks.
It supports working with tasks, projects, deadlines, and reminders.

## Setting up the development environment

### Managing Ruby versions

It's recommended to use [rbenv](https://github.com/rbenv/rbenv) to manage Ruby versions.

### Installing dependencies

Load the dependencies for the project using the following command:

```bash
bin/bundle install
```

### Managing database credentials

This project uses Rails encrypted credentials to manage secrets.
You need the following contents in your credentials file:

```yaml
database:
    password: <Your database password>
    username: <Your database username>
secret_key_base: <existing secret>
```

Please make sure to provider your own database credentials. The `secret_key_base` settings should be left as-is.
You can edit the credentials using `bin/rails credentials:edit`.

### Setting up the database

Run the following command to migrate the local database:

```bash
bin/rails db:migrate
```

### Starting the development server

Run the following command to start the development server:

```bash
bin/dev
```

You can now access the web application at http://localhost:3000