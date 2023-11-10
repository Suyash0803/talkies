const express=require('express');
const app=express();

app.get('/login',(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]});
})

app.listen(3000,()=>{
    console.log("Serving on port 3000");
})