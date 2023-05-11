# **myNewProject**: Creating My First MERN App

This project will utilize the full-stack JavaScript paradigm (MERN) and the **Axios** library along with the **Express** framework to make requests to our server.

### Installations
To see this project, install the following dependencies in the `client` and `server` folders respectively:
```bash
npm install
npm start               # to start the server in React client folder
node --watch server.js  # to start the back-end in server folder
```

#### Table of Contents
- [Setting Up MERN (the Boiler Plate Code)](#setting-up-mern)
    - [Controller](#controller)
    - [Routes](#routes)
    - [Linking Routes to Server File](#linking-routes-to-server-file)
    - [Setting Up the React Front-End](#setting-up-the-react-front-end)
    - [CORS](#cors)
- [The Back-End (Server)](#the-back-end-server)
    - [Postman](#postman)
- [The Front-End (React Client)](#the-front-end-react-client)
    - [Display All - Lifting State](#display-all-lifting-state)
- [CRUD Functionality](#crud-functionality)

---


## **Setting Up MERN** (the Boiler Plate Code)
1. Create a new directory (i.e., **`myNewProject`**) and `cd` into it:
    ```bash
    mkdir myNewProject
    cd myNewProject
    ```

2. Create new folder called "**server**" and `cd` into it:
    ```bash
    mkdir server
    cd server
    ```

3. Using the terminal or in the UI, create a new file called **server.js**:
    ```bash
    # Mac: 
    touch server.js
    # Windows (gitbash):
    touch server.js
    # Windows: 
    copy nul server.js
    ```

4. To prevent `npm` from making its own git repository, we can create our own by doing the following:
    ```bash
    git init    # adds a .git hidden directory and initializes a root folder as a local repo
    echo node_modules/ > .gitignore     # creates a .gitignore file in the app's root that will ignore all node_modules
    ```

5. Create a new project and install the server dependencies via `npm init -y`:
    ```bash
    npm init -y
    npm install express mongoose
    ```
    This will make a **`package.json`** file showing the packages we will need to run our server.

6. Within the **server.js** file, add the following code:
    ```js
    const express = require('express');
    const app = express();
    const port = 8000
    
    app.listen(port, () => console.log(`Listening on port: ${port}`));
    ```

7. Modularize project structure by making four more folders within **server**:
    ```bash
    mkdir config controllers models routes
    ```

8. In the root project folder (outside of **server**), create a React project via `create-react-app client-app-name-here`. As React is used for the client-side code, the project can be called "**client**".
    ```bash
    cd ..
    npx create-react-app client
    ```
    Now that the React project is built, two different servers will be running: the front-end React server with live reloading and the Express server.

### Controllers
9. In the **controllers** folder, create a controller called **person.controller.js** and include the following:
    ```js
    module.exports.index - (request, response) => { // this exports a key:val pair of index : function
        response.json({ // this is where we're setting the API's response to the requesting client
            message: "Hello World"
        })
    }
    ```
    **Code Block 1** - `server/controllers/`**`person.controller.js`**.

### Routes
10. In the **Routes** folder, create the **person.routes.js** file and include the following:
    ```js
    const PersonController = require('../controllers/person.controller'); // import the code from code block 1
    
    module.exports = (app) => {
        app.get('/api', PersonController.index)
    }
    ```
    **Code Block 2** - `server/routes/`**`person.routes.js`**.
    
    _What is happening:_ After importing (`require`) the controller file and assigning our controller’s exported logic to a variable, we will export an anonymous arrow function that requires an “app” as its parameter. The parameter’s  value (argument) will be assigned in our `server.js`, which will be the express server object itself.
    The function consists of lines that include our HTTP verb, the request's route and what our API is supposed to do when we hit that route. In the following, a "get" (verb) request to the "`/api`" route is to look to **`PersonController`**, find the value that goes with the "index" key and execute that value (which is a function).

### Linking Routes to Server File
11. After setting up the controller logic and our routes, each route has to end in '[/api](#)' which will simply respond to the client request with a response object containing a "message" key and value of "Hello World". Link the routes in **server.js** as such:
    ```js
    const express = require('express');
    const app = express();
    const port = 8000
    
    require('./routes/person.routes')(app); // we're importing the routes to export
    /* These two lines are the long-hand notation of the code above.
        They better show what's going on:
        const personRoutes = require("./routes/person.routes");     // assign the exported function to a const
        personRoutes(app);  // invoke the function and pass in the express "app" server
    */

    app.listen(port, () => console.log(`Listening on port: ${port}`));
    ```
    **Code Block 3** - `server/`**`server.js`**.
    
    When a request is made to ['localhost:8000/api'](#), our server will send send back a response object with the following JSON object included: `{message: "Hello World"}`. Now to set up the front-end.
    
### Setting Up the React Front-End
12. Change directories into **client** and run the following:
    ```bash
    cd ../client
    npm i axios
    ```

13. Navigate to the `src` directory and create a new folder (**components**) where we'll house our functional components.
14. Within `src/components`, create a file called **PersonForm.js**. In it, we will make an API request and display our message. In order to immediately make the API call and save the message to state, the `useEffect` hook will be utilized.
    ```js
    import React, { useEffect, useState } from 'react'
    import axios from 'axios';
    
    const PersonForm = () => {
    
        const [ message, setMessage ] = useState("Loading...")
        
        useEffect(() => {
            axios.get("http://localhost:8000/api")
                .then(res => setMessage(res.data.message))
                .catch(err => console.log(err))
        }, []);

        return (
            <div>
                <h2>Message from the backend: { message }</h2>
            </div>
        )
    }
    export default PersonForm;
    ```
    **Code Block 4** - `client/src/components/`**`PersonForm.js`**.
    
    The default message will say "Loading..." upon loading the link above in the browser.

15. In the **App.js** file, import the `PersonForm` component and include it as a child of App component:
    ```js
    import React from 'react';
    import PersonForm from './components/PersonForm';

    function App() {
        return (
            <div className="App">
                <PersonForm />
            </div>
        );
    }
    export default App;
    ```
    **Code Block 5** - `client/src/`**`App.js`**.
    
    At this point, we can start our backend server using the command `nodemon server.js` (or node `--watch server.js` if Nodemon isn't installed) and our React app via `npm run start` in two different consoles / terminals. Once they're both running, it should now be possible to visit '[localhost:3000](#)'. Upon visited, we'll end up just seeing "Loading..." as our message. _Why is that?_ This is because we are making a request to our server from a different origin.
    If we look in our browser's console it will show an error message pointing to **CORS (Cross Origin Resource Sharing)**. The browser considers the two servers to be different "origins" because React is running on `port 3000` and our node / express API server is running on `port 8000`. Browsers by default consider this an unsafe practice and so they require the API server to specifically allow this type of request. The React client **cannot** be configured to override this behavior. For more information see the MDN documentation **[here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)**.

### CORS
16. Let's stop the express server and install an extra package within.
    ```bash
    npm i cors
    ```
    This will install the ability to make cross-origin requests.

17. Add the following funcionality to the **server.js**:
    ```js
    const express = require('express');
    const cors = require('cors';)
    const app = express();
    app.use(cors());
    
    const port = 8000
    
    require('./routes/person.routes')(app); 

    app.listen(port, () => console.log(`Listening on port: ${port}`));
    ```
    **Code Block 6** - `server/`**`server.js`**.
    
    Restart the server again and refresh the browser to see that we are now able to make cross-origin requests in our project. Everytime we refresh the React app, we should briefly see "Loading..." as the message, which will then be replaced by "Hello World".


## The Back-End (Server)

We need to congfigure the Database to be able to start a full-stack MERN CRUD app. Let's return the `server` directory.

18. In the **`config`** folder, create a **mongoose.config.js** and add the following:
    ```js
    const mongoose = require('mongoose');
    // This will create a DB named "person" if one doesn't already exist (no need for mongo shell)
    
    mongoose.connect("mongodb://127.0.0.1:27017/person", {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
        .then(() => console.log("Established a connection to the database"))
        .catch(err => console.log("Something went wrong when connecting to the database", err));
    ```
    **Code Block 7** - `server/config/`**`mongoose.config.js`**.
    

19. Now that a connection to the Mongo DB, "person", has been configured, let's start creating our **Customer Relationship Management (CRM)** software by making a new model named `Person`". This is added below our last statement:
    ```js
    const mongoose = require("mongoose");
    
    const PersonSchema = new mongoose.Schema({
        firstName: { type: String },
        lastName: { type: String }
    }, { timestamps: true });
    
    const PersonExport = mongoose.model("Person", PersonSchema);
    module.exports = PersonExport;
    ```
    **Code Block 8** - `server/models/`**`mongoose.model.js`**.

20. In the **controller**, add a new method to handle the creation of our person:
    ```js
    const Person = require("../models/person.model");
    
    module.exports.createPerson = (request, response) => {
        /*
            Mongoose's "create" method is run using our Person
            model to add a new person to our DB's person collection
            request.body will contain something like...
            { firstName: "万葉", lastName: "楓原" }
        */
        Person.create(request.body) // This will use whatever the body of the client's request sends over
            .then(person => response.json(person))
            .catch(err => response.json(err));
    }
    ```
    **Code Block 9** - `server/controllers/`**`person.controller.js`**.

21. Update the Routes:
    ```js
    const PersonController = require('../controllers/person.controller');
    
    module.exports = (app) => {
        app.get('/api', PersonController.index);
        app.post('/api/people', PersonController.createPerson);
    }
    ```
    **Code Block 10** - `server/routes/`**`person.routes.js`**.
    
    By adding this line, we can now create people by sending a post request to [localhost:8000/api/people](#).

22. In order to start the MongoDB server connection and our **person.routes.js**, we need to import the **mongoose.config.js** file to the **server.js** so we can handle a post request to create a person. However, in order to process POST requests, we need to add a couple of app.use statements with some express middle-ware:
    ```js
    const express = require('express');
    const cors = require('cors';)
    const app = express();
    
    app.use(cors());
    app.use(expres.json()); // allows JSON obejcts to be posted
    app.use(express.urlencoded({extended: true})); // allows JSON objects with strings and arrays
    
    const port = 8000
    
    require('./config/mongoose.config');
    require('./routes/person.routes')(app); 
    
    app.listen(port, () => console.log(`Listening on port: ${port}`));
    ```
    **Code Block 11** - `server/`**`server.js`**.

Ensure the controller "create" logic works and stores to the database before moving to the front-end. This will be tested using **Postman**.


### Postman

23. In the Postman app, **switch from the default “`GET`” HTTP Verb to “`POST`” so we can create a document.**
24. Next, **write in the domain and route of your client’s request:** '[localhost:8000/api/people](#)'.
25. **Make sure the request’s Body is selected as well as “raw” and “JSON”:**
    <!-- image link here -->
26. Enter the request’s body. It will take in a JSON object, so the following syntax is expected:
    <!-- image link here -->
27. Click “Send” to submit your request. View the response in the “Response” window below the body.
    <!-- image link here -->

At this point, everything has to have been tested properly to ensure that everything in the back-end is working. Now, if errors were to be encoutered in the front-end, the server can be entirely eliminated as being the problem area, making trouble-shooting 50% more efficient.


## The Front-End (React Client)

28. Let’s change the `PersonForm` component to have a form so that we can add a person to and make a request to our API:
    ```js
    import React, { useState } from 'react';
    import axios from 'axios';
    
    const PersonForm = () => {
        
        // keep track of what is being typed via useState hook
        const [ firstName, setFirstName ] = useState("");
        const [ lastName, setLastName ] = useState("");
        
        // handler when the form is submitted
        const onSubmitHandler = (e) => {
            // prevent defaut behaviour of the submit
            e.preventDefault();
            // make a post request to create a new person
            axios.post('http://localhost:8000/api/people', {
                firstName, // this is a shortcut for firstName: firstName,
                lastName // this is a shortcut for lastName: lastName
            })
                .then( res => {
                    console.log(res);
                    console.log(res.data);
                })
                .catch( err => console.log(err) )
        }
        
        return (
            <form onSubmit={ onSubmitHandler }>
                <p>
                    <label>First Name</label><br/>
                    {/*
                        When the user types in this input, our onChange synthetic event
                        runs this arrow function, setting that event's target's (input)
                        value (what's typed into the input) to our updated state
                    */}
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </p>
                
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </p>
                <input type="submit" />
            </form>
        )
    }
    export default PersonForm;
    ```
    **Code Block 12** - `client/src/components/`**`PersonForm.js`**.
    Now test our the form to see it its working. A reponse should be able to be seen in the console. Console logs are essential in watching the movement of information in our code.

### Display All - Lifting State

29. 

## CRUD Functionality