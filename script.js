const player = document.querySelector("#player")
const computer = document.querySelector("#computer")
const button = document.querySelector(".start")
const game = document.querySelector("#game")
const scoreCheck = document.querySelector("#score")
const starTimer = document.querySelector("#count")
const incrementScore = 0

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
// For this, we will make a function that runs every 10ms and checks if you lost or not.
// then we fetch the top position of the playerand the left position of the block.
// We set an interval running our function (every 10ms). 
// We put that in a variable and parsed as an integer, so the parsing returns the number and not a string


let hitCheck = setInterval (function(){
  let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
  let computerLeft = parseInt(window.getComputedStyle(computer).getPropertyValue("left"));
  if(computerLeft<20 && computerLeft>-20 && playerTop>=225){
      computer.style.animation = "none";
      alert("Game Over. You lost score: "+Math.floor(incrementScore/100 + " Refresh this page to replay."));
      incrementScore=0;
  }else{
    incrementScore++;
      document.getElementById("scoreCheck").innerHTML = Math.floor(incrementScore/100);
  }
},10)