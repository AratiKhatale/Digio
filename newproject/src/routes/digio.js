const express = require("express");
const digioData = require("../model/digioSchema")

const router = new express.Router();


router.post("/v2/client/document/upload",async(req,res)=>{
    try{
        let data = new digioData(req.body);
        let createdata = await data.save();
        res.status(201).send(createdata);
    }catch(err){
        res.status(400).send(err.message)
    }

})

router.post("/v2/client/document/upload",async(req,res)=>{
    try{
      
        let readData = await digioData.find();
        res.status(200).send(readData);
    }catch(err){
        res.status(400).send(err.message)
    }

})



module.exports = router;