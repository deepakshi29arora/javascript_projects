var buttonColors=["red","blue","green","yellow"];//array of the colors 
var userClickedPattern=[];
var matchingArray=[];//array storing the patern shown on screen by computer itself
var level=0;//level is initially 0
var started=false;//game hasn't started yet so false

document.addEventListener("keypress",function()//user pressed key to start the game
{   if(!started)
    {
    nextSequence();
    started=true;
    }
})
//user now presses the button
function myfun(color)
{
    userClickedPattern.push(color);
    $(`#${color}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(color);
    //var audio=new Audio("sounds/"+(`${color}`)+".mp3");//play audio also while fading
     //audio.play();
     //check if user nd computer pattern is same/not.How to check?
     //check in userarray till length-1 i.e. check both array till len-1 index.
     //agr user array me 3 colors hai mtlb array index 2 tk check karenge dono array ko to match
     checkAnswer(userClickedPattern.length-1);

}

function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);//genearte a random number between 0-3
    var randomChosenColor=buttonColors[randomNumber];//randomchosencolor=green/yellow/...
    matchingArray.push(randomChosenColor);//push random chosen color into our array to match the pattern
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);//show fading effect of the color randomly chosen by computer
    playSound(randomChosenColor);
    //var audio=new Audio("sounds/"+(`${randomChosenColor}`)+".mp3");//play audio also while fading
    //audio.play();
}
function checkAnswer(currentLevel)
{
if(matchingArray[currentLevel]===userClickedPattern[currentLevel])//dono ka last element same hai to check length
{ 
    if(matchingArray.length===userClickedPattern.length)//length is also same means both match nd user will move tonext level
    {
        setTimeout(function(){
        nextSequence();
        },1000);
    }
}    
else
{
        playSound("wrong");
        $("body").addClass("game-over");

        $("h1").text("Game-over,Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");

    },200)
    startOver();
}
}
  
function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");//play audio also while fading
    audio.play();
}
function startOver()
{
matchingArray=[];
level=0;
started=false;

}




