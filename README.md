<h3> Live @ https://node-chat-app-1.herokuapp.com/ </h3>

<h3>==========About==========</h3>

<p>Back end built with Javascript, NodeJS, Express, and MongoDB. Front end is a work in progress. 

<h3>==========Installation==========</h3>
<p>Just clone the repository, run node install to download the modules and dependencies and you're all set.</p>

<h3>==========Routes==========</h3>
<h3>Todos</h3>
<p><h4>GET /todos</h4> Returns all todos for a specific user, must be authenticated with correct x-auth header to access.</p>
<p><h4>GET /todos/:id</h4>Returns a single todo, must be authenticated with correct x-auth header to access.</p>
<p><h4>POST /todos</h4>Creates a new ToDo for a user, must be authenticated with correct x-auth header to access.</p>
<p><h4>PATCH /todos/:id</h4>Updates an id with the matching id passed in, must be authenticated with correct x-auth header to access.</p>
<p><h4>DELETE /todos/:id</h4>Deletes an id with the matching id passed in, must be authenticated with correct x-auth header to access.</p>
<h3>Users</h3>
<p><h4>GET /users/me</h4>Returns your user object, must be authenticated with correct x-auth header to access.</p>
<p><h4>POST /users</h4>Creates a new user, and sets the x-auth header </p>
<p><h4>POST /users/login</h4>Validates email and password, and sets a new x-auth header</p>
<p><h4>DELETE /users/me/token</h4>Log out route, removes token from user and un-authenticates them.</p>

<h3>==========Testing==========</h3>
<p> Run node test, and it will run the testing suite, run node test-watch and it will run the suite and reload on file change if you have nodemon installed. I have unit tests for each route, to make sure everything behaves as it should. You can see them in /server/tests.</p>

