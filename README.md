How to get started with this project.

1. #### Install frontend dependencies.

   This will spin up a container with Node.js running that will install all of the required packages for the frontend, including Vite's development server itself.

   ```console
   $ docker compose run --rm npm install
   ```

2. #### Run development server for frontend assets.

   Once all necessary packages are installed, this will run the development server for frontend assets. It will watch for changes on all frontend files and update them automatically.

   ```console
   $ docker compose run --rm npm
   ```

3. #### Run development server.

   This is the Laravel application itself.

   ```console
   $ docker compose up -d nginx
   ```
