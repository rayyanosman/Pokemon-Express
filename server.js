//Load express by requiring it
const express = require ('express')

//Create the express app by setting express() to a variable
const app = express();

//Set a variable (we call it app) of port to 3000
//Set the app to listen to the port, and 
//include a console.log() so i can tell when my server is running
app.listen(3000, ()=>[
    console.log('listening!')
])

//Mount Route - by including a get route / that will res.send('A message') so when i go to localhost:300 I'll see the message
app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!')
});
