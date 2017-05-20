var searchWord;
var matchedPlant = [];
var foundMatch = false;
var userInputArr = [];


$(document).ready (function () {
  $('#form').submit(function(event) {
    event.preventDefault()
    var commonName = $('#common').val().toLowerCase();
    searchWord = commonName;
    matchUserInputwithData();
  });
})
function matchUserInputwithData() {

  matchedPlant = [];
  foundMatch = false;
  for (var i = 0; i < ALLplants.length; i++) {
    if (ALLplants[i].common_name === searchWord) {
      foundMatch = true;
      matchedPlant.push(ALLplants[i]);
      alert(matchedPlant)
      break;
    }
  }
  matchedPlant.forEach(function(p) {
    console.log(p);
    $('#handleBarMenu').html(new PlantObj(p).toHtml());
  });

  if (foundMatch === false) {
    alert('SORRY,That plant is NOT in our system yet');
  }
}


  //   matchedPlant = [];
  //   if (foundMatch === false) {
  //     alert('SORRY,That plant is NOT in our system yet');
  //   }
  // }

  ////
  // var genus = $('#genus').val()
  // var species = $('#species').val()
  // var id = $('#id').val()
  // var species = $('#species').val()
  // var family = $('#family').val()
  // var commonfamily = $('#commonfamily').val()
  // var order = $('#order').val()
  // var division = $('#division').val()
  // var superdivision = $('#superdivision').val()
  // var subkingdon = $('#subkingdon').val()
  // var kingdom = $('#kingdom').val()
  // userInputArr.push(genus,species,commonName,id,species, family,commonfamily, order, division,superdivision, subkingdon, kingdom)
  // userInputArr.push(commonName)
  // console.log(userInputArr);
  ///
  // userInputArr.map(function (i) {
  //   return i || null
  // });
