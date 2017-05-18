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


app.listen(PORT, function(){
  console.log('server up on port:' +PORT);
});

//this needs to be tied to an ajax reqin a js file in scripts, this is the request from the server to the database getting the taxonomy table//
// app.get('/taxonomy',function(request,response){
//   client.query('SELECT * FROM table_name WHERE (genus LIKE varGenus) OR  OR ( genus LIKE null)
//    AND (species LIKE varSpecies ) OR (species LIKE null)
//    AND (full_species_name LIKE varFullSpeciesName ) OR (full_species_name LIKE null)
//     AND (common_name LIKE varCommonName) OR (common_name LIKE null)
//    AND (id LIKE varId) OR (id LIKE null)
//     AND (dicot_moncot_gymno LIKE varDicot) OR (dicot_moncot_gymno LIKE null)
//    AND (family LIKE varFamily) OR (family LIKE null)
//     AND (common_family LIKE varCommonFamily) OR (common_family LIKE null)
//    AND (order LIKE varOrder) OR (order LIKE null)
//     AND (class LIKE varClass) OR (class LIKE null)
//    AND (division LIKE varDivision) OR (division LIKE null)
//     AND (superdevision LIKE varSuperdivison) OR (superdevision LIKE null)
//    AND (subkingdom LIKE varSubkingdom) OR (subkingdom LIKE null)
//     AND (kingdom LIKE varKingdom) OR (kingdom LIKE null)'
//
// )
//   .then(function(result){
//     response.send(result.rows);
//   })
// .catch(function(err){
//   console.log(err);
// })
// });
//

//


//test string//
//
// function taxObj(tax){
// this.genus = genus,
// this.species= species
// this.full_species_name= full_species_name,
// this.common_name=common_name,
// this.id= id,
// this.dicot_moncot_gymno= Dicot,
// this.family= family,
// this.common_family=common_family,
// this.or_der=or_de,
// this.class =class,
// this.division=division,
// this.superdevision= superdevision,
// this.subkingdom=subkingdom,
// this.kingdom=kingdom
// }



// ["Abies", "amabilis", "Abies amabilis", "silver fir", null, null, null,null,null,null,null,null,null,null]
