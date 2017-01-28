var mongoose = require('mongoose'),
terror = require('../models/graphSchema');





exports.getData = function(req, res){
    terror.find({topic:'Terror'},function(err, docs){
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
        console.log("docs "+docs);
        res.json(docs);
    });
}

