const express=require("express");
const bodyparser=require("body-parser");
const app=express();

app.get("/",function(req,res)
{
    var today=new Date;
    if(today.getDay()===6 || today.getDay()===0)
    {
        res.send("It's a weekend");
    }
    else
    {
        res.send("Ohhh!Have to work");
    }

})

app.listen(3000,function(){
console.log("Server up n runnung");
})




