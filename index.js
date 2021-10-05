//dice1
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
randomImage="images/dice" + randomNumber1 + ".png";

document.querySelector(".diceball").getAttribute("src");
document.querySelector(".diceball").setAttribute("src",randomImage);

//dice2
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
randomImage1="images/dice" + randomNumber2 + ".png";

document.querySelector(".roll").getAttribute("src");
document.querySelector(".roll").setAttribute("src",randomImage1);

//text
if(randomNumber1>randomNumber2)
{
    document.querySelector(".heading").innerHTML="🌟Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector(".heading").innerHTML="🌟Player 2 Wins!";
}
else
{
    document.querySelector(".heading").innerHTML="DRAW!";
}
//indexinput
var firstplayer=document.querySelector("#name_of_player1").value;
var secondplayer=document.querySelector("#name_of_player2").value;
