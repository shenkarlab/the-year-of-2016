var mongoose = require('mongoose');
var schema = mongoose.Schema;


var graphSchema = new schema({
  topic: {type:String, required:true},
  date : {type:String,required:true},
  num: {type:Number, required:true}
},{collection: 'graphs'});


var event = mongoose.model('event', graphSchema);
module.exports = event;