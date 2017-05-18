


$("#first-choice").change(function() {

	var $dropdown = $(this);
console.log($dropdown);
	$.get("data/data.json", function(data) {

console.log(data);
		var key = $dropdown.val();
		var vals = [];

		switch(key) {
			case "taxonomy":
				vals = data.taxonomy.split(",");
				break;
			case "physicalFeatures":
				vals = data.physicalFeatures.split(",");
				break;
        case "GrowthRequirements":
          vals = data.GrowthRequirements.split(",");
          break;
        case "Reproduction":
          vals = data.Reproduction.split(",");
          break;
			case 'base':
				vals = ['Please choose from above'];
          // console.log(vals);
		}
    // console.log(vals);

		var $secondChoice = $("#second-choice");
		$secondChoice.empty();
		$.each(vals, function(index, value) {
			$secondChoice.append("<option>" + value + "</option>");
		});

	});
});
