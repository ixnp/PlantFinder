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

// var $source = $('#portfolioHandlebar').html();
//   // console.log($source);
//   var template = Handlebars.compile($source);
//
// var allProjects = [];
//
// function Project (opts) {
//   this.title = opts.title;
//   this.language = opts.language;
//   this.category = opts.category;
//   this.gitHubUrl = opts.gitHubUrl;
//   this.body = opts.body;
//   this.publishedOn = opts.publishedOn;
// }
// Project.prototype.toHtml = function () {
//   var $source = $('#portfolioHandlebar').html();
//   // console.log($source);
//   var template = Handlebars.compile($source);
//   // console.log(template);
//   return template(this);
// };

$(function(){
  $.ajax({
    url:'/scripts/species.json',
    dataType:'json',
  }).done(function(data){
    data.forEach((function (project){
      console.log('request done: ' + Date.now());
      ALLplants.push(new PlantObj(project));
    }));
    // ALLplants.forEach(function(p) {
    //   $('#handlebarSection').append(p.toHtml());
    // });
    // projectView.initIndexPage();
  })
  console.log ('requst started:' + Date.now())
});
