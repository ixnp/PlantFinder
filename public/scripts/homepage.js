var searchWord;
var matchedPlant = [];
var foundMatch = false;
var userInputArr = [];
var location;

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
    console.log('kalsdfj', p.location);

  });
  if (foundMatch === false) {
    alert('SORRY,That plant is NOT in our system yet');
  }
}

matchedPlant.forEach(function(){
  console.log('afjod');
});


  matchedPlant.forEach(function(p) {
    console.log(p);
    $('#handleBarMenu').html(new PlantObj(p).toHtml());
  });
  if (foundMatch === false) {
    alert('SORRY,That plant is NOT in our system yet');
  }
