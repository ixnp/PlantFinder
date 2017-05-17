//handlebars template
'use strict';
const renderResults = function(object) {
let template = Handlebars.compile($('#template').text());

return template(object);
};
