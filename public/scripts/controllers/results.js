'use strict';

//
//   const userInput = {};
// var userInputArr = [];
// $(document).ready (function () {
//
//
//   $('#form').submit(function(event) {
//     event.preventDefault()
//     var genus = $('#genus').val()
//     var species = $('#species').val()
//     var full_species_name = $('#full_species_name').val()
//     var common_name = $('#common').val()
//     var id = $('#id').val()
//     var dicot_moncot_gymno = $('#dicot').val()
//     var family = $('#family').val()
//     var common_family = $('#commonfamily').val()
//     var or_der = $('#order').val()
//     var class = $('#class').val()
//     var division = $('#division').val()
//     var superdivision = $('#superdivision').val()
//     var subkingdom = $('#subkingdom').val()
//     var kingdom = $('#kingdom').val()
//     userInputArr.push(genus,species, full_species_name, common_name,id,dicot, family,commonfamily, order,class, division,superdivision, subkingdon, kingdom)
//     console.log(userInputArr.map(function (i) {
//       return i || null
//     }));
//   });
//   getData();
// })
//
// // }
//
// userInput.getData =
// function(callback) {
//   $.post('public/data/speciesData.json', {
//     genus: this.genus,
//     species:this.species,
//     full_species_name:this.full_species_name,
//     common_name:this.common_name,
//     id:this.id,
//     dicot_moncot_gymno:this.dicot_moncot_gymno ,
//     family:this.family,
//     common_family:this.common_family,
//     or_der:this.or_der,
//     class:this.class,
//     division: this.division,
//     superdivision: this.superdivision,
//     subkingdom:this.subkingdom,
//     kingdom:this.kingdom
//   })

var ALLplants = [];
// constructor function
function PlantObj (obj) {
  this.number = obj.number;
  this.genus = obj.genus;
  this.species = obj.species;
  this.full_species_name = obj.full_species_name;
  this.common_name = obj.common_name;
  this.id = obj.id,
  this.dicot_moncot_gymno = obj.dicot_moncot_gymno;
  this.family = obj.family;
  this.common_family = obj.common_family;
  this.or_der = obj.or_der;
  this.class = obj.class;
  this.division = obj.division;
  this.superdevision = obj.superdevision;
  this.subkingdom = obj.subkingdom;
  this.kingdom = obj.kingdom;
}

const ALLplants = []


// $('#form').submit(function loadProjects(){
// console.log('$', $.getJSON  )
// console.log('sdfdfa ',$('#plantData'));
// $('#plantData').submit(function(event){
//   event.preventDefault();
$(function(){
  $.ajax({
    url:'/scripts/species.json',
    dataType:'json',
  }).done(function(data){
    data.forEach((function (project){
      console.log('request done: ' + Date.now());
      ALLplants.push(new PlantObj(project));
    }));
    ALLplants.forEach(function(p) {
      $('#handleBarMenu').append(p.toHtml());
    });
  })
  console.log ('requst started:' + Date.now())
});
// })
// data.forEach(function(projectObject){
//   projectsArr.push(new PlantObj(projectObject));
// });
// console.log(projectsArr);
// projectsArr.forEach(function(newProjectObject){
//   $('#results-template').append(newProjectObject.toHtml());
// });

  // .done(function(data){
  //   data.forEach(function(plants){
  //     console.log('insde of 1st for each')
  //     Allplants.push(new PlantObj(plants));
  //     console.log(Allplants,'is Allplants');
  //     console.log(plants);

//   }
// }
// )
// .then(callback);
// };

//
// //
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
//
//
//
//
// //ajax request that ties to the get request in server.js//
// //object is yet to be defind, but this will be the constructor function//
// //
// fetchAll = function(callback){
//   $.get('/taxonomy')
//   .then(
//     function(results){
//       console.log(results);
//       callback();
//     }
//   )
// };
