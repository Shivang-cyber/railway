const express = require("express")

const app = express()

app.get("/",(req,res)=>{
 return res.send({status:true,value:+req.query.t + 1})
})

app.listen(3000,()=>{
 console.log('listening to 3000');
})