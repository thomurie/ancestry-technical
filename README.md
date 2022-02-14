# ancestry-technical

## Starting this API
1. Clone the repository
2. Run npm install
3. Run node server.js

This will start the API allowing you to send post requests to the API to obtain responses

## User interface
Currently this application is missing a client side application. If given more time I would create a seperate client application using React. The application would contain serveral components.
The application would take in user input, and depending on the operation selected it would make a post request to the appropriate endpoint, obtain the response, and then display the response to the user.

## Storing results
Storing results from previous requests/calculations could be done with both SQL and noSQL. If this application had user accounts I would store the results in a database built from multiple tables.
This would allow returning users to view previous results quickly and efficiently. I would use sequelize and connect it to a PostgreSQL database where I would have a database composed of several tables that 
formed relationships between the users, calculations, and results. I would then also add times to the requests. This would allow me to develop further features to allow a user to view their previous calulations
and results. If no user profiles were being used I would create a session ID and then use a noSQL database to create a session and store calculations and results. I would store the session ID in local storage
and retrieve the session ID when the user initializes the page I would then retrieve there previous queries and responses from the database and display them to the user. 

## Deployment
I would deploy the client and server applications separately. I would deploy the API/server to a service like Heroku that allows me to easily integrate with a database. Heroku also allows us to have a scalable
backend that grows with the demands of our clients

I would use Netlify to deploy the react client application. Netlify makes the process really smooth and simple. It also provides many tools that offer scalability. 
