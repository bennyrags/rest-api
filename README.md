# REST API Exercise

The goal of this exercise was to create a RESTful service for an imaginary retail company, taking in an id from a URL, fetching data from an external API and a NoSQL database, and returning JSON.

I did this by creating fetching data from https://redsky.target.com API and a Mongo database, which I created for this purpose. I then took a handful of product IDs from Target's website to test my service. 

I used Node.js and Express to create a route to '/api/v1/products'. From there, I created an async get reqest, with awaits to order the async calls. The first call uses Axios to retrieve the name of the product from https://redsky.target.com. The second call is to the Mongo database, which returns the price for that specific ID. 

## Tech Used

-Node.js
-Express
-Axios
-MongoDB
-Mongoose

### Instructions to get up and running

-Clone or fork the repo
-Open locally
-Run NPM install
-Create Mongo DB
-Test with these product IDs: 54213087, 53518384, 54499196, 11031092
-An url endopoint would be http://localhost:5000/api/v1/products/53518384. 

