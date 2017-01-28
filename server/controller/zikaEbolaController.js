var mongoose = require('mongoose'),
zikaEbola = require('../models/graphSchema');





exports.getData = function(req, res){
  var t1, t2;

    zikaEbola.find({topic:'zika'},function(err, docs){
        if (err){
              throw err;
        }
<<<<<<< HEAD
=======

      function sortByFirstName(a, b) {
          var sortStatus = 0;
       
          if (a.date < b.date) {
              sortStatus = -1;
          } else if (a.date > b.date) {
                  sortStatus = 1;
          }
          return sortStatus;
      }

      docs.sort(sortByFirstName);
>>>>>>> c1df8107d975d0d7ba838faf4d3ed5dfd299c878
  
     t1 = docs; 

        zikaEbola.find({topic:'ebola'},function(error, docs){
            if (err){
                  throw err;
            }
<<<<<<< HEAD
=======

    docs.sort(sortByFirstName);

>>>>>>> c1df8107d975d0d7ba838faf4d3ed5dfd299c878
   
     t2 = docs; 

    var res1 = {
        zika:t1,
        ebola:t2
    };

    res.json(res1);

         });
    });
}

