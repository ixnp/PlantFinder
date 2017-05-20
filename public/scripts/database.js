// InfoObj.all = [];
//
// function InfoObj (obj) {
//   this.common_name = obj.common_name;
//   this.body = obj.body;
// };
//
// InfoObj.prototype.insertRecord = function(callback) {
//     $.post('/info', {common_name: this.common_name, body: this.body,})
//     .then(console.log)
//     .then(callback);
//   };
//
//   InfoObj.prototype.updateRecord = function(callback) {
//     $.ajax({
//       url: `/info/${this.info_id}`,
//       method: 'PUT',
//       data: {
//         common_name: this.common_name,
//         body: this.body
//     })
//     .then(console.log)
//     .then(callback);
//   };
//   //on submit I need to make a select all with same commen name somewhere//
//   InfoObj.loadAll = rows => {
//     InfoObj.all = rows.map(ele => new InfoObj(ele));
//   };
//   InfoObj.all.forEach(function(p) {
//     if(InfoObj.common_name === InfoObj.PlantObj){
//     console.log(p);
//     $('#handleBarMenu').html(new InfoObj(p).toHtml());
//   }
//   });
//
//   InfoObj.fetchAll = callback => {
//     $.post('/info')
//     .then(
//       results => {
//         InfoObj.loadAll(results);
//         callback();
//       }
//     )
//   };
