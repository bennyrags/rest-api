let express = require('express');
let router = express.Router();
let products = [];
let axios = require('axios');
//get req takes in an id as an arg
router.get('/:id', function(req, res){
    //router needs to get id    
    let id = req.params.id;
    
    const getFromTarget = async => {

        try {
            axios.get(`https://redsky.target.com/v2/pdp/tcin/${id}`)
            .then(response=>{
                res.send(response.data);
            })
            .catch(error=>{
                console.log('error when getting this thang', error);
                res.sendStatus(500);
            })

        }

        catch (error) {
            console.log('error when trying to make an axios get req in an async:', error)
        }

    }

    getFromTarget();
    
});
  

module.exports = router;