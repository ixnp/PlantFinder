var userInputArr = [];
$(document).ready (function () {
  $('#form').submit(function(event) {
    event.preventDefault()
    var genus = $('#genus').val()
    var species = $('#species').val()
    var commonName = $('#common').val()
    var id = $('#id').val()
    var species = $('#species').val()
    var family = $('#family').val()
    var commonfamily = $('#commonfamily').val()
    var order = $('#order').val()
    var division = $('#division').val()
    var superdivision = $('#superdivision').val()
    var subkingdon = $('#subkingdon').val()
    var kingdom = $('#kingdom').val()
    userInputArr.push(genus,species,commonName,id,species, family,commonfamily, order, division,superdivision, subkingdon, kingdom)
    console.log(userInputArr.map(function (i) {
      return i || null
    }));
  });
})
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

$(function(){
  $.ajax({
    url:'/scripts/species.json',
    dataType:'json',
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
});
//this just test
