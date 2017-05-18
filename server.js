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
// app.get('/github', function(req,res){
//   superagent.get('')
// });
//may not need this for get hub token//
//
//
// //rout for retrieving html fiels for display in the browsler. 301d18 class9 part 3 23:00//
// //**need to complet rout directory for this//
app.get('/', function(request,responose){
  responose.sendFile('index.html',{root:'.'});
});


//this needs to be tied to an ajax reqin a js file in scripts, this is the request from the server to the database getting the taxonomy table//
app.get('/taxonomy',function(request,response){
  client.query('SELECT * FROM taxonomy')
  .then(function(result){
    response.send(result.rows);
  })
.catch(function(err){
  console.log(err);
})
});


app.get('/taxonomy',function(request,response){
  client.query(
    SELECT *
     CASE WHEN
     SELECT * FROM table WHERE columnName SIMILAR TO '[userInput]'
    ,
  [
      request.body.genus
      request.body.species
      request.body.full_species_name
      request.body.common_name
      request.body.id
      request.body.dicot_moncot_gymno
      request.body.family
      request.body.common_family
      request.body.or_der
      request.body.class
      request.body.division
      request.body.superdevision
      request.body.subkingdom
      request.body.kingdom
  ]
)
})


app.listen(PORT, function(){
  console.log('server up on port:' +PORT);
});
