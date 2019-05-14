let mongoose = require('mongoose');


/* MONGOOSE CONN */
const databaseUrl = 'mongodb://localhost:27017/Target_Products';

mongoose.connect(databaseUrl, { useNewUrlParser: true });

mongoose.connection.once('connected', () => {
    console.log('mongoose connected to:', databaseUrl);
});

/** -------- MONGOOSE SCHEMA --------**/

const Schema = mongoose.Schema;

const target_product_prices_schema = new Schema({
    product_id: { type: Number, required: true }, // unique: true, may have index issues
    price: { type: Number, required: true },
    currency_code: { type: String, required: true },
});

const Target_Product_Prices = mongoose.model('Target_Product_Prices', target_product_prices_schema, 'products');

// Target_Product_Prices.findOne({'product_id':11031092}, function(err, response) {
//     console.log(`this is response from target_product_prices`, response)
//     price = response.price
//     console.log(`this is response2price,`, price)
    
// }  );


module.exports = Target_Product_Prices;