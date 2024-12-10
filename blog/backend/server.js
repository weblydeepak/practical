const app = require('./app.js');
const mongoose = require('mongoose');
const DotEnv = require('dotenv');
DotEnv.config({path:"./config.env"})
const PORT = process.env.PORT||5408

// connecting mongooose 
mongoose.connect(process.env.DB_url).then(()=>{
    console.log("connected to MongoDB");
}).catch((error)=>{
    console.log(error);
})


//  giving /ruuning server on port  
app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`);
})