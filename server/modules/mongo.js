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
(async () => {
let findResponse = await Target_Product_Prices.find({});
console.log('this is target product prices find', findResponse)

if (findResponse.length === 0 || findResponse=== undefined) {

Target_Product_Prices.insertMany([{
        "product_id" : 11031092,
        "price" : 1.89,
        "currency_code" : "USD"
    },
    
    {
        "product_id" : 54213087,
        "price" : 10.0,
        "currency_code" : "USD"
    },
    
    {
        "product_id" : 53518384,
        "price" : 59.99,
        "currency_code" : "USD"
    },
    
    {
        "product_id" : 54499196,
        "price" : 19.98,
        "currency_code" : "USD"
    }]);
}
})();
module.exports = Target_Product_Prices;