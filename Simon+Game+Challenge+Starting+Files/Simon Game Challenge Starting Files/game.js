document.addEventListener("keypress",function()
{
$("h1").css("font","Level-1");
var matchingArray=[];
var randomNumber=Math.floor(Math.random()*4);
var buttonColors=["red","blue","green","yellow"];
var randomChosenColor=buttonColors[randomNumber];
matchingArray.push(randomChosenColor);

//var currColor=document.querySelector(`${randomChosenColor}`);
//console.log(currColor);
$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
var audio=new Audio("C:\Users\adeepakshi\Desktop\js-basics\Simon_Game_Challenge_Starting_Files\Simon_Game_Challenge_Starting_Files\sounds"+randomChosenColor+".mp3");
audio.play();

});
