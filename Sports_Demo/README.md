## Refacotring Practice Assignment #23: Sports Demo


Front-End:
- Views
    - Index Page/View: This will list the athletes in the database (route "/").
    - Create Page/View: A form to create an athlete (route: "/create")
    - Details Page/View: A page to actually see the details of an athlete with links to edit/delete (route: "/readOne/:id")
    - Edit Page/View: A page to edit an athlete in the databse with a delete button as well (route: "/:id/edit")
- Components
    - Form: The form that we will use on the create page and the edit page
    - Delete Button: which will make an api call to delete an athelete

Back-End
1. GET Request: "/api/athletes" - return all athletes
2. POST Request: "/api/createAthlete" - create a new athlete
3. GET Request: "/api/readAthlete/:id" - retrieve a specific athlete
3. PATCH Request: "/api/updateAthlete/:id" - update a specific athlete
3. DELETE Request: "/api/deleteAthlete/:id" - delete a specific athlete