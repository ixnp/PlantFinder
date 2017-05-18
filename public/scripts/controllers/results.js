
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

console.log(userInputArr);

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



//ajax request that ties to the get request in server.js//
//object is yet to be defind, but this will be the constructor function//

fetchAll = function(callback){
  $.get('/taxonomy')
  .then(
    function(results){
      console.log(results);
      callback();
    }
  )
};
fetchAll();


//
