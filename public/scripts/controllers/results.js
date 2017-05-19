'use strict';


  const userInput = {};
var userInputArr = [];
$(document).ready (function () {


  $('#form').submit(function(event) {
    event.preventDefault()
    var genus = $('#genus').val()
    var species = $('#species').val()
    var full_species_name = $('#full_species_name').val()
    var commonName = $('#common').val()
    var id = $('#id').val()
    var dicot = $('#dicot').val()
    var family = $('#family').val()
    var commonfamily = $('#commonfamily').val()
    var order = $('#order').val()
    var division = $('#division').val()
    var superdivision = $('#superdivision').val()
    var subkingdom = $('#subkingdom').val()
    var kingdom = $('#kingdom').val()
    userInputArr.push(genus,species, full_species_name, commonName,id,dicot, family,commonfamily, order, division,superdivision, subkingdon, kingdom)
    console.log(userInputArr.map(function (i) {
      return i || null
    }));
  });
  getData();
})
//
// // }
//
userInput.getData =
function(callback) {
  $.get('/taxonomy', {
    genus: this.genus,
    species:this.species,
    full_species_name:this.full_species_name,
    common_name:this.common_name,
    id:this.id,
    dicot_moncot_gymno:this.dicot_moncot_gymno ,
    family:this.family,
    common_family:this.common_family,
    or_der:this.or_der,
    class:this.class,
    division: this.division,
    superdivision: this.superdivision,
    subkingdom:this.subkingdom,
    kingdom:this.kingdom
  })
  // .done(function(data){
  //   data.forEach(function(plants){
  //     console.log('insde of 1st for each')
  //     Allplants.push(new PlantObj(plants));
  //     console.log(Allplants,'is Allplants');
  //     console.log(plants);

  }
}
)
// .then(callback);
};

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
// fetchAll();


//
