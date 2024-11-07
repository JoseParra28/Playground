'load strict'


const randomNumber = Math.floor(Math.random() * 6) + 1;
const randomDiceImg = "dice" + randomNumber + ".png";
const randomImgSource = "media/" + randomDiceImg

const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src", randomImgSource)
image2.setAttribute("src", randomImgSource)

 console.log(randomNumber)
 console.log(randomNumber2)

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImgSource2 = "media/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute.randomImgSource2
