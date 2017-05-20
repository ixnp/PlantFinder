'use strict';

var ALLplants = [];
// constructor function
function PlantObj (obj) {
  this.number = obj.number;
  this.genus = obj.genus;
  this.species = obj.species;
  this.full_species_name = obj.full_species_name;
  this.common_name = obj.common_name;
  this.dicot_moncot_gymno = obj.dicot_moncot_gymno;
  this.family = obj.family;
  this.common_family = obj.common_family;
  this.or_der = obj.or_der;
  this.id = obj.id;
  this.class = obj.class;
  this.division = obj.division;
  this.superdevision = obj.superdevision;
  this.subkingdom = obj.subkingdom;
  this.kingdom = obj.kingdom;
}





// var allProjects = [];
//
// function Project (opts) {
//   this.title = opts.title;
//   this.language = opts.language;
//   this.category = opts.category;
//   this.gitHubUrl = opts.gitHubUrl;
//   this.body = opts.body;
//   this.publishedOn = opts.publishedOn;
// }
// Project.prototype.toHtml =
 PlantObj.toHtml = function () {
  var $source = $('#results-template').html();
  // console.log($source);
  var template = Handlebars.compile($source);
  // console.log(template);
  return template(this);
  console.log(this);
};

$(function(){
  $.ajax({
    url:'/scripts/species.json',
    dataType:'json',
  }).done(function(data){
    data.forEach((function (project){

      ALLplants.push(new PlantObj(project));
      console.log(ALLplants);
    }))
    ALLplants.forEach(function(p){
      console.log('p', p);
      $('#results-template').append(p.toHtml());
    })
  })
});

//   ALLplants.forEach(function(p) {
// // $('#results-template').append(p.toHtml());
//     }));
//     // ALLplants.populateFilters();
//     });
//   })



//   ALLplants.populateFilters = function() {
//   let template = Handlebars.compile('PlantObj');
//   console.log('dsfsd', ALLplants);
//   $('#results-template').text(template(PlantObj));
//   console.log(template);
// }


// var plantHand =  template({genus: 'genus', species: 'species',full_species_name: 'full_species_name', common_name: 'common_name', id:'id',dicot_moncot_gymno: 'dicot_moncot_gymno',family: 'family',common_family: 'common_family',or_der: 'or_der',class: 'class',division: 'division',superdivision: 'superdivision',subkingdom: 'subkingdom', kingdom: 'kingdom'});
