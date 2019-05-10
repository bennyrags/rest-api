let express = require('express');
let router = express.Router();
let products = [];

//get req takes in an id as an arg
router.get('/:id', function(req, res){
    
    //router needs to get id
    
    let id = req.params.id;

    res.send(id);
  });
  

module.exports = router;