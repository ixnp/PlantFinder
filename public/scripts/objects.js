var ALLplants = [];
// constructor function
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
  this.location = obj.location;
  this.image = obj.image;
}
PlantObj.prototype.toHtml = function () {
  var template = Handlebars.compile($('#results-template').html());
  return template(this)
}

$(function(){
  $.ajax({
    url:'/scripts/species.json',
    dataType:'json',
  }).done(function(data){
    data.forEach((function (project){
      ALLplants.push(new PlantObj(project));
    }));
  })
});

images = function(){
ALLplants.forEach(function(PlantObj){
  $('#results-template').append(this.image.toHtml())
  console.log('jsdaiofj',this.image);
});
}
