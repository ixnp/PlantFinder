'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const $ = require('jquery');
const app = express();
// const request = require('superagent');
const PORT = process.env.PORT || 3000;
// Required hy heroku//

const conString = 'postgress://postgres:1234@5432:plant_finder';
// change once live on heroku//
const client = new pg.Client(consString);
client.connect();
client.on('error', err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(_dirname + './public'));
// app.get('/github', function(req,res){
//   superagent.get('')
// });
//may not need this for get hub token//

app.listen(PORT, function(){
  console.log('server up on port:' +PORT);
});
