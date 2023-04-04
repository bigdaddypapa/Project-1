                                            Making a JavaScript Jump Game

Built With: HTML CSS Javascript

This game is my first project as a software developer student at Per Scholas.

Direct link to the game : (live server from vscode) http://127.0.0.1:5500/index.html

Game Functions:
My process step by step: 

Note that most of the work has been done using Css. Given that animation was a big part of my game it is just easier for me to use CSS.
We start by making a body with a div.
This div contains the entire game and has 2 smaller divs inside of that one containing our player and a block(computer).
All of this is positioned inside of our <HTML> tag.
Then we start styling with CSS.  I first created a div box where the game will take place (500px * 300px) the player character(20px*50px) placed on the left bottom side of the div box then the block (20px*20px) placed on the right bottom.
To make our block slide towards the player, we create an animation using keyframe and add it to the block(computer).
To make the animation repeat, we add infinite to animation.
Now for the jumping, we create a second animation in which we make the box jump to the top.
We set it to 30 and 70%. This make make it jump up, hover a bit, and then go back down.
Now We want to control the jump.
More specifically we want it to jump when we call the JavaScript function we are about to make.
More more specifically we run a function that adds the class to our character player,
making it jump, and then it removes the class again, so it stops. 
We head now to javascript where We start by making two variables to access our player and block.
we want it to jump when we call the JavaScript function
It jumps! But only on our first click.
We set an interval
running a function (after 600ms, the animation length)
This removes the class once the animation is done.
 adding collisions for when we don’t dodge the block with a jump.
 For this, we will make a function that runs every 11ms and checks if you lost or not.
 then we fetch the top position of the playerand the left position of the block.
 We set an interval running our function . 
 We put that in a variable and parsed as an integer, so the parsing returns the number and not a string
Now time for the actual check.
If the blockLeft is smaller than 20,
and bigger than zero,
and there is more than 225px space above the character (meaning it didn’t jump),
the player loses.

All in all, this project was very challenging and took me quite some time! but i can feel that i'm getting better and better


