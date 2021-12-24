const express  = require('express');
const path     = require('path');
const request  = require('request');
const cors = require('cors');


const app = express();
app.use(cors());

//set the port as env variable
const PORT    = process.env.PORT || 3030;

//This will pipe the whole request to the API endpoint
//and pipe the response back to the requester.
// app.use('/', function(req, res) {
//   req.pipe(request(`${API_URL}${req.url}`)).pipe(res);
// });

app.all('*', function(req, res) {
  console.log('req.path', req.path.replace('/', ''));
  req.pipe(request(req.path.replace('/', '')))
   .on('error', function(err) {
    console.error(err);
    res.status(500).send('Error connecting to the model microservice');
   })
   .pipe(res);
 });


 app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
//  http://localhost:3030/https://api.darksky.net/forecast/89c28b0c97b77b4d1be0ca94e3dd16ca/12.9019031,77.6303438