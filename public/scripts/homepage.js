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
