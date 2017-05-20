
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
      alert('match found')
      matchedPlant.push(searchWord);
      alert(matchedPlant);
      alert('size of matchedPlant :' + matchedPlant.length )
      break;
    }
  }
  if (foundMatch === false) {
    alert('SORRY,That plant is NOT in our system yet');
  }
}


  // function matchUserInputwithData() {
  //   foundMatch = false;
  //   for (var i = 0; i < ALLplants.length; i++) {
  //     console.log(ALLplants[i].common_name)
  //     if (ALLplants[i].common_name === searchWord) {
  //       foundMatch = true;
  //       alert('match found')
  //       matchedPlant.push(searchWord);
  //       alert(matchedPlant);
  //     }
  //     // break;
  //   }
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
