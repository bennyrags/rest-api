const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const products = require('./routes/products.router.js');
const PORT = 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for post/put requests
app.use(express.static('build'));
//app.use(express.static("server/public"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/v1/products', products);


/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});