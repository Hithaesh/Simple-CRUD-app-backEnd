// BRAIN OF OUR BACK-END

// console.log("Hello there!");
// Using the package.json to RUN MY FILE.
// Add it in the script tag [LINE-8]
// Terminal: npm run [script_name]



// Step-1: INSTALL FRAMEWORK [Express.js]
// Search NPM website to download EXPRESS.
//      node_modules(dependencies and libraries) 
//      package-lock.json


//BOILER PLATE CODE.
const express = require('express');
const app = express();
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const port = 3000;

// MIDDLEWARE
// Cannot pass JSON through nodeJS (configuration for Middleware)
app.use(express.json());

// Middleware configuration for enabling to add data using URL-Encoded
app.use(express.urlencoded({extended:false}));



// Step-11: Adding Routes
app.use("/api/products", productRoute);



// app.listen(3000, () => {
//     console.log(`Server is running on port ${port}`);
// });


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// STEP-2: 
//      Whatever the CLIENT sends to the server is [req].
//      Whatever the RESPONSE is given to client is [res].
//      Client is the Browser.
app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

app.get('/about', (req, res) => {
    res.send("Hello from Node API Home Page as you requested");
});





//Step-4: 
// [POST Method] is used to save something. 
// app.post('/api/products', async (req, res) => {
//     // res.send("Server Received");
//     // console.log(req.body); // This will be the data so REQUEST.
//     // res.send(req.body); // The requested data will be sent back as a RESPONSE.

//     // Result: Undefined
//     // Not allowed to pass JSON through nodeJS
//     // Middleware is needed.
//     // We send JSON Data

//     // Step-5 : TO SAVE THE DATA in mongoDB
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }

// });



// // Step-6: API call which can view this products as well
// app.get('/api/products', async (req, res) => {

//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error){  
//         res.status(500).json({message: error.message});
//     }
// });


// // Step-7: Specific Product depends on the _id.
// // Install JSON Viewer
// // To get the ID using the params.
// // While calling an API, you should provide the _id in the call
// // http://localhost:3000/api/products/65fe6fca0eca6d48ad6994e8
// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error){
//         res.status(500).json({message : error.message});
//     }
// })


// // Step-8: Update a product!
// app.put('/api/product/:id', async (req, res) => {
//     try{
//         const { id } = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product) {
//             return res.status(404).json({message: "Product Not Found"});
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error){
//         res.status(500).json({message : error.message});
//     }
// });


// // Step-9: Delete a Product

// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         // If you want the product to be displayed 
//         const product = await Product.findByIdAndDelete(id);

//         // If NOT, this
//         // await Product.findByIdAndDelete(id);
//         if(!product) {
//             return res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({message: "Product deleted successfully"});
//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// });



// Step-10: Creating routes because index.js is populated with API calls.








// STEP-3: Connect MongoDB Database to NodeJS(Back-end)
//      Install Thunder CLient, POSTMAN, INSOMANIA
//      NEXT: INSTALL GIT BASH.
//      AUTOMATICALLY REFRESH [nodemon] npm i nodemon -D
//      Install developmentally, not Globally!
//      Mongodb Atlas-> To create->New Project
//      Install mongodb: npm i mongodb
//      To access: import mongoose(allows us to access mongoDB)

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hithaesh:Tennisboy@backenddb.toc7kyc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
// We want the DB to be connected and then the server to be running.
// Step-1: Connect the DB.
// Step-2: Connect to the server.
})
.catch(() => {
    console.log("Connection Failed!");
});











