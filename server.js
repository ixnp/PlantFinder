'use strict';

const pg = require('pg');
const fs = require('fs'); //native with node and it doesn't need to be installed//
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const $ = require('jquery');
const app = express();
const request = require('superagent');
const PORT = process.env.PORT || 3000;
// Required hy heroku//

const conString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/plant_finder';
// change once live on heroku//
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.log(err));

//middlewear plugins//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static( './public'));

//rout for retrieving html fiels for display in the browsler. 301d18 class9 part 3 23:00//
//**need to complet rout directory for this//
app.get('/', function(request,responose){
  responose.sendFile('index.html',{root:'.'});
});


app.get('/taxonomy',function(request,response){
  client.query('SELECT * FROM taxonomy')
  .then(function(result){
    response.send(result.rows);
  })
  .catch(function(err){
    console.log(err);
  })
});





//this needs to be tied to an ajax reqin a js file in scripts, this is the request from the server to the database getting the taxonomy table//
app.post('/taxonomy',function(request,response){

  client.query(
        `SELECT * FROM common_name WHERE common_name=$1`,
        [request.body.common_name],
        .then(function(result){
          response.send(result.rows);
        })
        .catch(function(err){
          console.log(err);
        })
      });


app.listen(PORT, function(){
  console.log('server up on port:' +PORT);
});
