let express = require('express');
let router = express.Router();
let axios = require('axios');
let Target_Product_Prices = require('../modules/mongo');

console.log(`this is target_product_prices,`, Target_Product_Prices)

router.get('/:id', async (req, res) => {

    let id = req.params.id;
    let name = '';

    try {
            //call redsky for name
        let response = await axios.get(`http://redsky.target.com/v2/pdp/tcin/${id}?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics`)

        name = response.data.product.item.product_description.title;

            //call mongo db for pricing info
        let product = await Target_Product_Prices.findOne({ 'product_id': id });
            //add passed id, name, product price to obj for RESTful service
        let restResponse = {
            "id": id,
            "name": name,
            "current_price": {
                "value": product.price,
                "currency_code": 'USD'
            }
        };

        res.send(restResponse)

    }
    catch (error) {
        res.sendStatus(500);
        console.log(`error in try catch of get:`, error)
    }

});


module.exports = router;