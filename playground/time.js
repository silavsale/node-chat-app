var moment = require('moment');

//
// var date = new Date();
// // var month
//
// console.log(date.getMonth());

var date = moment().format('MMMM Do YYYY, h:mm a');

console.log(date);