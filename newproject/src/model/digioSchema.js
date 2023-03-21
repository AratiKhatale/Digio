const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    signers:{
        type:Object,
        identifier: String,
        name: String,
       reason: String,
    }, 
    
    expire_in_days: Number,
        // display_on_page: "all",
        
    notify_signers: Boolean
        
})


const digioData = new mongoose.model("digiodata" , Schema);
module.exports = digioData;