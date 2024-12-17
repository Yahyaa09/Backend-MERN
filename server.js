

//instanciate server
const express = require('express');
const app = express();

const port = 3000;

//make server live on a specified port
app.listen(port, () => {
    console.log(`Server started at port : ${port}`);
});

//send a response on this path '/' i.e. Homepage
app.get('/', (req, res) => {
    res.send('Hello ji');
});

//using a body parser to parse JSON data and add it to request.body 
app.use(express.json());

//test a get request using POSTMAN for this
app.post('/api/cars',(req,res)=>{
    const {name,model} = req.body;
    console.log(name);
    console.log(model);
    res.send("Car Submitted Successfully !")
});

//Learned mongoDB alg se


/******************************** Linking DB and Express ********************************* */
//npm i mongoose

/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', { // ye same rhega har jagah syntax h yaad nhi krna ! 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to the database!");
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
});*/


