'load strict'

// Getting random numbers 
const randomNumber = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Selecting what images to change
const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

// Change image name with random numbers
const randomImgSource = `media/dice${randomNumber}.png`;
const randomImgSource2 = `media/dice${randomNumber2}.png`

// set element attribute with new source

// image1.setAttribute("src", randomImgSource)
// image2.setAttribute("src", randomImgSource2)

if ( randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
   
}else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 wins";

}else {
    document.querySelector("h1").innerHTML = "It's a tie";
}

// Quiz game
const magicNum = Math.floor(Math.random(0) * 10) + 1;
const question = document.querySelector(".questions");
const userInput = document.querySelector(".guess").value;
const checkBtn = document.querySelector(".check");

checkBtn.addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    if (!guess){
        question.textContent = 'No Number'
    } else if (guess < magicNum){
        question.textContent = 'Too Low'
    }else if (guess > magicNum){
        question.textContent = 'Too High'
    } else if (guess == magicNum) {
        question.textContent = 'Well Done'
    }
    console.log(guess, typeof guess)
    console.log(magicNum)
    })



