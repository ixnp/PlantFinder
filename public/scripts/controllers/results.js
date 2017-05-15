



//ajax request that ties to the get request in server.js//
//object is yet to be defind, but this will be the constructor function//

fetchAll = function(callback){
  $.get('/taxonomy')
  .then(
    function(results){
      console.log(results);
      callback();
    }
  )
};
fetchAll();
