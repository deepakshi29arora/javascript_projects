const express=require("express");//it requires express modules
const app=express();

app.get("/",function(request,response)//when server gets "GET" request from the browser it routes it to 
// "/" which is the home route then it hits to the callback function which has request and response and it sends response as hellllo to our
//localhost:3000 which is our port which is listening to our request.

{
    response.send("Helllo");
})

app.get("/about",function(request,response)
{
    response.send("I am Deepakshi Arora");
})

app.get("/contact",function(request,response)
{
    response.send("Contact email:deep.akshiarora1999@gmail.com");
})

app.listen(3000,function()
{
console.log("Server listening to port 3000");
}

);