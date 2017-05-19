
  var searchWord = null;
  matchedPlant = [];

 var foundMatch = false;

var userInputArr = [];
$(document).ready (function () {
  $('#form').submit(function(event) {
    event.preventDefault()
    var commonName = $('#common').val().toLowerCase();
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
    userInputArr.push(commonName)
    console.log(userInputArr);
    searchWord = commonName;
    matchUserInputwithData();
    // console.log(userInputArr.map(function (i) {
    //   return i || null
    // }));
  });
})

  function matchUserInputwithData() {

    for (var i = 0; i < ALLplants.length; i++) {
      console.log(ALLplants[i].common_name)
      if (ALLplants[i].common_name === searchWord) {
        alert('match found')
        foundMatch = true;
        matchedPlant.push(searchWord);
        alert(matchedPlant);
        console.log (matchedPlant)
      }
    }
    if (foundMatch === false) {
      alert('SORRY,That plant is NOT in our system yet');
    }
  }
