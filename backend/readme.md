## Backend

Ensure you have a node v20 or higher
Node version higher than v20 has a built-in utility to use .env files already
https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs

Make sure you have an .env file with the following values, ask the admin for these values, either we can review if it's possible to add a vault with these values:
SUPABASE_KEY=
SUPABASE_DB_PASSWORD=




> NOTE

> There's a tool allows you to use different node versions. NVM:
> 1. nvm-windows - https://github.com/coreybutler/nvm-windows
> 2. nvm-unix (macbook, linux) - https://github.com/nvm-sh/nvm

### Database service 

If you want to create a supabase table, you can do it through supabase console, although a RLS is required.

source: https://supabase.com/docs/guides/database/postgres/row-level-security

To add policies:
1. Log in in supabase
2. go to Table editor
3. go to **Authentication** section
4. Click configuration -> Policies
5. Click "create policy"
6. make sure you read https://supabase.com/docs/guides/database/postgres/row-level-security before creating a new one

### TO-DO

- [x] create public policy so we can fetch users
- [] create a policy where only authenticated users can insert or update users.
- [] Add a vault with secrets
- [] make sure everyone has access to supabase database