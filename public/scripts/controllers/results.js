'use strict';



var userInputArr = [];
$(document).ready (function () {

  $('#form').submit(function(event) {
    event.preventDefault()
    let userInput = new PlantObj({
     genus : $('#genus').val()
     species : $('#species').val()
     species : $('#species').val()
     commonName : $('#common').val()
     id : $('#id').val()
     species : $('#species').val()
     family : $('#family').val()
     commonfamily : $('#commonfamily').val()
     order : $('#order').val()
     division : $('#division').val()
     superdivision : $('#superdivision').val()
     subkingdon : $('#subkingdon').val()
     kingdom : $('#kingdom').val()
    userInputArr.push(genus,species,commonName,id,species, family,commonfamily, order, division,superdivision, subkingdon, kingdom)
    console.log(userInputArr.map(function (i) {
      return i || null
    }));
  });
  })
})

// }

userInput.prototype.insertData = function(callback) {
  $.post('/taxonomy', {
  this.genus: genus ,
  this.species: species ,
  this.full_species_name: full_species_name,
  this.id: id,
  this.dicot: dicot
  this.family: family,
  this.commonfamily: commonfamily,
  this.order: order,
  this.division: division,
  this.superdivision: superdivision,
  this.subkingdon: subkingdon,
  this.kingdom: kingdom
}).done(function(data){
  data.forEach((function (plants){
    console.log('insde of 1st for each');
    ALLplants.push(new PlantObj(plants));
    console.log (ALLplants, ' is ALLplants');
    console.log(plants);
  }));
  ALLplants.forEach(function(p) {
    $('#handleBarMenu').append(p.toHtml());
  });
})

const renderResults = function(object) {
let template = Handlebars.compile($('#template').text());

return template(object);


//
// $(function(){
//   $.ajax({
//     url:'/taxonomy',
//     dataType:'json',
//   }).done(function(data){
//     data.forEach((function (plants){
//       console.log('insde of 1st for each');
//       ALLplants.push(new PlantObj(plants));
//       console.log (ALLplants, ' is ALLplants');
//       console.log(plants);
//     }));
//     ALLplants.forEach(function(p) {
//       $('#handleBarMenu').append(p.toHtml());
//     });
//   })
// });

// querry peramers or url, boyParser no json


//ajax request that ties to the get request in server.js//
//object is yet to be defind, but this will be the constructor function//
//
// fetchAll = function(callback){
//   $.get('/taxonomy')
//   .then(
//     function(results){
//       console.log(results);
//       callback();
//     }
//   )
// };
// fetchAll();


//
