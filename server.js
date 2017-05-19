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

//
// app.get('/taxonomy',function(request,response){
//   client.query('SELECT * FROM taxonomy')
//   .then(function(result){
//     response.send(result.rows);
//   })
//   .catch(function(err){
//     console.log(err);
//   })
// });





//this needs to be tied to an ajax reqin a js file in scripts, this is the request from the server to the database getting the taxonomy table//
// app.post('/taxonomy',function(request,response){
//
//   client.query(
//
//     `SELECT * FROM taxonomy WHERE
//     taxonomy (genus, species, full_species_name, id, dicot, species, family, commonfamily, order, division, superdivision, subkingdon, kingdom)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $12, $13, $14 );
//
//     (genus LIKE genus) OR ( genus LIKE null)
//     AND (species LIKE species ) OR (species LIKE null)
//     AND (full_species_name LIKE full_species_name ) OR (full_species_name LIKE null)
//     AND (common_name LIKE common_name) OR (common_name LIKE null)
//     AND (id LIKE id) OR (id LIKE null)
//     AND (dicot_moncot_gymno LIKE dicot) OR (dicot_moncot_gymno LIKE null)
//     AND (family LIKE Family) OR (family LIKE null)
//     AND (common_family LIKE commonfamily) OR (common_family LIKE null)
//     AND (order LIKE order) OR (order LIKE null)
//     AND (class LIKE class) OR (class LIKE null)
//     AND (division LIKE division) OR (division LIKE null)
//     AND (superdevision LIKE superdivison) OR (superdevision LIKE null)
//     AND (subkingdom LIKE subkingdom) OR (subkingdom LIKE null)
//     AND (kingdom LIKE kingdom) OR (kingdom LIKE null)`
//     ,
//     [
//       request.body.genus,
//       request.body.species,
//       request.body.full_species_name,
//       request.body.id,
//       request.body.dicot,
//       request.body.family,
//       request.body.commonfamily,
//       request.body.order,
//       request.body.division,
//       request.body.superdivision,
//       request.body.subkingdon,
//       request.body.kingdom
//     ]
//   )
//   .then(function(result){
//     response.send(result.rows);
//   })
//   .catch(function(err){
//     console.log(err);
//   })
// });

app.listen(PORT, function(){
  console.log('server up on port:' +PORT);
});
