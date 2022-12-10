require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
var Schema = mongoose.Schema ;

const app = express();

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
mongoose.set('strictQuery', true);


const PORT = process.env.PORT || 3000 ;
const HOST = process.env.HOST || "localhost" ;




app.get("/api/health",function(req,res){
   res.send(`Backend server is active status : active and time ${new Date()}`)
})
app.listen(PORT, function(){
   console.log(`http://${HOST}:${PORT}`);
});
