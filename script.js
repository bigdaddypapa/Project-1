const player = document.querySelector("#player")
const computer = document.querySelector("#computer")
const button = document.querySelector(".start")
const game = document.querySelector("#game")
const scoreCheck = document.querySelector("#score")
const starTimer = document.querySelector("#count")


// create a button that's gonna start the game after the click

button.addEventListener('click', function(){
        
        button.style.visibility = 'hidden'
        starTimer.style.visibility = 'visible'
        countdown()
})

function countdown(){
    let counter = 3;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          starTimer.innerHTML ='GO'
          starTimer.style.left= '44%'
          clearInterval(counter);
          
      }
      if (counter === -1) {
        starTimer.style.visibility = 'hidden'
        game.style.visibility = 'visible'
        scoreCheck.style.visibility = 'visible'
        computer.classList.add ('animatecomputer')
        hitCheck()
  
      }
      
    },1100);
    
  }

//we want it to jump when we call the JavaScript function
// It jumps! But only on our first click.
// We set an interval
// running a function (after 600ms, the animation length)
// This removes the class once the animation is done.

  function jump(){
    if(player.classList != 'animateplayer'){
    player.classList.add('animateplayer')
    }
    setTimeout (function(){
        player.classList.remove('animateplayer')
    },600)
  }
//  adding collisions for when we don’t dodge the block with a jump.
// For this, we will make a function that runs every 11ms and checks if you lost or not.
// then we fetch the top position of the playerand the left position of the block.
// We set an interval running our function . 
// We put that in a variable and parsed as an integer, so the parsing returns the number and not a string
let count = 0
count++

function hitCheck(){ 
  
 
  setInterval (function(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let computerLeft = parseInt(window.getComputedStyle(computer).getPropertyValue("left"));
  
  if(computerLeft<20 && computerLeft>-20 && playerTop>=225){
      computer.style.animation = "none";
      alert("Game Over. You lost score: "+Math.floor(count/100) + " Refresh this page to replay.");
      scoreCheck.style.visibility = 'hidden'
      computer.style.animation = "none";
     
  }
  else{

    count++
       document.getElementById("scoreCheck").innerHTML = Math.floor(count/100);
     
   }

   if (count/100 === 10){
    computer.style.animation = "none";
    alert("good job!! you passed level 1, press ok to continue to level 2.") 
    
    computer.style.animation = 'collision 0.9s infinite linear'
 }
  
  
if (count/100=== 20){
  computer.style.animation = "none";
  alert("congratulations you won "+Math.floor(count/100) + " Refresh this page to replay.")
  scoreCheck.style.visibility = 'hidden'
  computer.style.animation = "none";
  

}
},11)


 }


  

