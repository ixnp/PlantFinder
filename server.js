'use strict';
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express ();
const conString = 'postgres://postgres:1234@localhost:5432/lab10'; // TODO: Don't forget to set your own conString
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res){
res.sendFile(__dirname + '/index.html');

});

app.use(express.static(__dirname + '/public'));
app.use('/public',express.static('public'))



const PORT = process.env.PORT || 3000;

app.post('.data', function (req, res) {
  req.on('data', function (data){
  console.log(data.toString());
  })
  req.on ('end', function() {
    res.send('data received!');
  })
})

////
app.post('/info', (request, response) => {
  client.query(
    'INSERT INTO info(common_name, body) VALUES($1, $2) ON CONFLICT DO NOTHING',
    [request.body.common_name, request.body.body]
  )
  .then(() => response.send('Insert complete'))
  .catch(console.error);
});


/////idk about the .//
function loadInfo() {
  fs.readFile('.public.scripts/database.js', (err, fd) => {
    JSON.parse(fd.toString()).forEach(ele => {
      client.query(
        'INSERT INTO info(common_name, body) VALUES($1, $2) ON CONFLICT DO NOTHING',
        [ele.common_name, ele.body]
      )
      .catch(console.error);
    })
  })
}
function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
      info (
      info_id SERIAL PRIMARY KEY,
      common_name VARCHAR(255) UNIQUE NOT NULL,
      body text
    );`
  )
  .then(loadInfo)
.catch(console.error);
  ////


app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}!`);
});
