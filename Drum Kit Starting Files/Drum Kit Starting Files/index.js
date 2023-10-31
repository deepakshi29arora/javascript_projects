for(var i=0;i<document.querySelectorAll(".drum").length;i++)//loop for all buttons with class drum and show alert for all buttons on click 
{
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);//firstly drum[0] will be selected then 1,2...length of drum buttons and all will be triggered on onclick
function handleClick()
{//detect when we click button on screen 
    var buttonCapture=this.innerHTML;
    makeSound(buttonCapture);
    makeAnimation(buttonCapture);

}
//detect when we press keyboard keys like w,a,s...l so detect and capture them and pass them to function which plays exact sound which we attached to the specific key 
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    makeAnimation(event.key);

})
function makeSound(key)
{
    switch(key)
    {
        case "w":var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a":var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "d":var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        case "j":var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "k":var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

        case "l":var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

   }
}
   function makeAnimation(key)//to give animation effect after we click key 
   {
        var currkey=document.querySelector("."+key);
        currkey.classList.add("pressed");
        setTimeout(function()
        {
            currkey.classList.remove("pressed");
            console.log("hurrrr");
        },100);

        }    
   }

