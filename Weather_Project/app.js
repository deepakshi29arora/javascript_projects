//From command line firstly type npm init and then get express
//Here require express which we need for development of node app
const { response } = require("express");
const express=require("express");
//To create const called app which will initialise the express app
const app=express();
//to use https we need to require it
const https=require("https");

//To get resquests from cilent and send them response from our side that server is up and running
app.get("/",function(req,res)//when user routes to our home then get it and send him whatever response we have for him
{
    //We want to fetch api for the client so 
    const url="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3ca1732d71df6ed83165cc93202c80fd"
    https.get(url,function(response)//make HTTPS get request over to internet to this url and log the reponse
    {
    console.log(response.statusCode);

    response.on("data",function(data)//native function to parse json data we got to convert into our desired data
    {
        const weatherData=JSON.parse(data);//var weatherdata has parsed json data
        const temp=weatherData.main.temp;//temp contains temperature from the extension we have 
        const desc=weatherData.weather[0].description;
        console.log(temp);
        console.log(desc);
    })
})
    res.send("Server is up and running");//Send our response to user that server is working fine.
    //After this in command line write nodemon app.js to start our server 
})


//Listen on port 3000 of our server
app.listen(3000,function()
{
    console.log("Server listening to port 3000");
})