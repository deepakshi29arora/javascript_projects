//for 1st dice
var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomNumberImage ="dice"+randomNumber1+".png";//to select dice img of the random no generated(2-->dice2.png)

randomNumberImage="images/"+randomNumberImage;//as we have images/dice1.png so to point to exact location

var newimg1=document.querySelectorAll("img")[0];//select img array 0th img to change

newimg1=newimg1.setAttribute("src",randomNumberImage);//set img attribute src to new image we just generated above

//for 2nd dice

var randomNumber2=(Math.floor(Math.random()*6))+1;

randomImage2="images/dice"+randomNumber2+".png";//to select dice img of the random no generated(2-->dice2.png)

var newimg2=document.querySelectorAll("img")[1];//select img array 0th img to change

newimg2=newimg2.setAttribute("src",randomImage2);

//to check who wins and display in heading

if(randomNumber1>randomNumber2)//if random number 1 was greater so player 1 wins
{

    document.querySelector("h1").innerHTML="Player 1 wins!"
}
else if(randomNumber1<randomNumber2)//if random number 2 was greater so player 1 wins
{
    document.querySelector("h1").innerHTML="Player 2 wins!"
}
else{//if both random no were same 
   document.querySelector("h1").innerHTML="Draw!Refresh again to play"
}
