'use strict';
const express = require('express');
const app = express ();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');

});

const PORT = process.env.PORT || 3000;

app.post('.data', function (req, res) {
  req.on('data', function (data){
  console.log(data.toString());
  })
  req.on ('end', function() {
    res.send('data received!');
  })
})

app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}!`);
});
