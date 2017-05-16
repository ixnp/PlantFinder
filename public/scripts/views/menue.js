menuA =['physical Features', 'Growth Requirements','Reproduction','Use','Taxonomy']

taxonomy = ['Genus','Species','Common Name','Family','Commen Family Name', 'Class','Division','superdevision','Subkingdom','Kingdom']

physicalFeatures = ['Active Growth Period',	'After Harvest Regrowth Rate','Bloat','CN Ratio'	,'Coppice Potential',	'Fall Conspicuous',	'Fire Resistant','Flower Color'	,'Flower Conspicuous'	,'Foliage Color', 'Foliage Porosity Summer'	,'Foliage Porosity Winter', 'Foliage Texture'	'Fruit or Seed Color' , 'Fruit or Seed Conspicuous','Growth Form','Growth Rate','Height at 20 Years Maximum feet','Height Mature feet','Known Allelopath','Leaf Retention', 'Lifespan','Low Growing Grass', 'Nitrogen Fixation'	, 'Resprout Ability', 'Shape and Orientation' , 'Toxicity',];

Growth Requirements =['Adapted to Coarse Textured Soils', 'Adapted To Medium Textured Soils', 'Adapted to Fine', 'Textured Soils', 'CaCO3 Tolerance'	, 'Cold Stratification Required', 'Drought Tolerance', 'Fertility Requirement', 'Fire Tolerance', 'Frost Free Days, Minimum', 'Hedge Tolerance'	, 'Moisture Use', 'pH, Minimum', 'pH, Maximum', 'Planting Density per Acre, Minimum', 'Planting Density per Acre, Maximum', 'Precipitation, Minimum', 'Precipitation, Maximum', 'Root Depth, Minimum (inches)', 'Salinity Tolerance', 'Shade Tolerance','Temperature, Minimum (°F)'];

Reproduction = [
  'Bloom Period', 'Commercial Availability', 'Fruit/Seed Abundance', 'Fruit/Seed Period Begin', 'Fruit/Seed Period End', 'Fruit/Seed Persistence', 'Propagated by Bare Root', 'Propagated by Bulb', 'Propagated by Container', 'Propagated by Corn', 'Propagated by Cuttings', 'Propagated by Seed'	, 'Propagated by Sod', 'Propagated by Sprigs', 'Propagated by Tuber', 'Seed per Pound', 'Seed Spread Rate', 'Seedling Vigor', 'Small Grain', 'Vegetative Spread Rate',
]


(function(module) {
  function Article(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }


app.Article.allCategories(function(rows) {
    if ($('#category-filter option').length < 2) {
      $('#category-filter').append(rows.map(row => template({val: row.category})));
    }
  });
};
