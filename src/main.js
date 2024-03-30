const express=require('express');
require("dotenv").config();
const port=process.env.PORT;
const app=express();
app.get("/", (req, res)=>{
    res.send({
        message: "Hola mundo usando Rest (servidor de Cloud Computing) "
    })
})

app.listen(port, ()=>{
    console.log(`App listening at port: ${port}`);
})