let express = require('express');
let router = express.Router();
let axios = require('axios');

//get req takes in an id as an arg
router.get('/:id', function (req, res) {
    //router needs to get id    
    let id = req.params.id;


    const getFromTarget = async => {

        try {
            axios.get(`https://redsky.target.com/v2/pdp/tcin/${id}`)
                .then(response => {
                   //I think I have to wittle the info down more when it is sent back 
                    let title = response.data.product.item.product_description.title;
                    let newObj = {
                        "id": id,
                        "name": title,
                    }

                    res.send(newObj);
                })
                .catch(error => {
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