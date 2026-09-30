import express from 'express'
const app = express();



app.get("/",(req,res) => {
    res.send("hello express");
    
});

app.listen(4444,()=> console.log("prg1 is runnit at 4444"));