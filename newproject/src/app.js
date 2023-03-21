require("./db/connection")
const mongoose = require("mongoose")
const express = require("express")
const port = 3000;
const router = require("./routes/digio")

const app = express();

app.use(express.json())
app.use(router)


app.listen(port, ()=>{
    console.log(`listening the port ${port}`)
})