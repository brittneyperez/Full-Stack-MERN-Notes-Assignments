# **myNewProject**: Creating My First MERN App

This project will utilize the full-stack JavaScript paradigm (MERN) and the **Axios** library along with the **Express** framework to make requests to our server.

### Installations
To see this project, install the following dependencies in the `client` and `server` folders respectively:
```bash
npm install
npm start # to start the server in React client folder
node --watch server.js # to start the back-end in server folder
```

#### Table of Contents
- [Setting Up MERN (the Boiler Plate Code)](#setting-up-mern)
    - [The Back-End (Server)](#the-back-end-server)
    - [The Front-End (React Client)](#the-front-end-react-client)
    - [CRUD Functionality](#crud-functionality)

---

# **Setting Up MERN** (the Boiler Plate Code)
1. Create a new directory (i.e., **`myNewProject`**) and `cd` into it:
    ```bash
    mkdir myNewProject
    cd myNewProject
    ```

2. To prevent `npm` from making its own git repository, we can create our own by doing the following:
    ```bash
    git init 
    # adds a .git hidden directory and initializes a root folder as a local repo
    echo node_modules/ > .gitignore 
    # creates a .gitignore file in the app's root that will ignore all node_modules
    ```

3. Create new folder called "**server**" and `cd` into it:
    ```bash
    mkdir server
    cd server
    ```

4. Via the terminal or in the UI, create a new file called **server.js**:
    ```bash
    # Mac: 
    touch server.js
    # Windows (gitbash):
    touch server.js
    # Windows: 
    copy nul server.js
    ```

5. Create a new project by:
    ```bash
    npm init -y
    ```
    This will make a **`package.json`** file showing the packages we will need to run our server.

6. Install the following dependencies:
    ```bash
    npm install express mongoose
    ```

7. Within the **server.js** file, add the following code:
    ```js
    const express = erquire('express');
    const app = express();
    const port = 8000
    
    app.listen(port, () => console.log(`Listening on port ${port}`));
    ```

8. Modularize project structure by making four more folders within **server**:
    ```bash
    mkdir config controllers models routes
    ```

9. In the root project folder (outside of **server**), create a React project via `create-react-app client-app-name-here`. As React is used for the client-side code, the project can be called "**client**".
    ```bash
    cd ..
    npx create-react-app client
    ```
    Now that the React project is built, two different servers will be running: the front-end React server with live reloading and the Express server.

### Controllers
### Routes
### Axios
### Components
### CORS

## The Back-End (Server)

## The Front-End (React Client)
## CRUD Funcionality