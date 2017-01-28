var mongoose = require('mongoose');
var schema = mongoose.Schema;


var graphSchema = new schema({
  topic: {type:String, required:true},
  date : {type:String,required:true},
<<<<<<< HEAD
  num: {type:Number}
=======
  num: {type:Number, required:true}
>>>>>>> c1df8107d975d0d7ba838faf4d3ed5dfd299c878
},{collection: 'graphs'});


var event = mongoose.model('event', graphSchema);
module.exports = event;