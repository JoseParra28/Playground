'load strict'


const randomNumber = Math.floor(Math.random() * 6) + 1;
const randomDiceImg = "dice" + randomNumber + ".png";
const randomImgSource = "media/" + randomDiceImg

const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src", randomImgSource)
image2.setAttribute("src", randomImgSource)

const randomNumber2 = Math.floor(Math.random(1) * 6) + 2;
const randomImgSource2 = "media/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);



if ( randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
   
}else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 wins";

}else {
    document.querySelector("h1").innerHTML = "It's a tie";
}


const randomNames = ["Maria", "Nicolas", "Antonio", "Teresa"]
const magiNumber = Math.floor(Math.random()*randomNames.length)
const home = document.querySelector(".randomnumber").innerHTML = magiNumber

console.log(magiNumber)

