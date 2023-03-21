const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Digio")
.then(res=>console.log("connection is sucessfull"))
.catch(err=>console.log("connection not success"));

