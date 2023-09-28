## How To Run

1. ### Install dependencies.

   Installs application dependencies, including development packages for things like Vite, TailwindCSS, etc.
   This will spin up a container with Node.js running that will install all of the required packages for the front-end, including Vite's development server itself.

   ```console
   $ docker compose run --rm composer install
   $ docker compose run --rm npm install
   ```

2. ### Run development server.

   Runs a reverse proxy to forward incoming requests to either the Laravel or Vite backends. It provides Hot Module Replacement for the browser.

   ```console
   $ docker compose up -d nginx
   ```
