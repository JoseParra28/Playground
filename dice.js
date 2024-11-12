'load strict'

// Getting random numbers 
let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Selecting what images to change
const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

// Change image name with random numbers
const randomImgSource = `media/dice${randomNumber}.png`;
const randomImgSource2 = `media/dice${randomNumber2}.png`

// set element attribute with new source

if ( randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
   
}else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 wins";

}else {
    document.querySelector("h1").innerHTML = "It's a tie";
}

let reRoll = document.querySelector(".reroll");

reRoll.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 6) + 1;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
})

// Quiz game
let magicNum = Math.trunc(Math.random(0) * 10) + 1;
const question = document.querySelector(".questions");
const checkBtn = document.querySelector(".check");
let score = 10;


checkBtn.addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    if (!guess){
        question.textContent = 'No Number'
    } else if (guess < magicNum){
        question.textContent = 'Too Low' 
        score--;
        document.querySelector(".score").textContent = score
        if (score === 0){
            question.textContent = 'Game Over!'
            document.getElementsByTagName("body")[0].style.backgroundColor = "red"
        }
    }else if (guess > magicNum){
        question.textContent = 'Too High'
        score--;
        document.querySelector(".score").textContent = score
        if (score === 0){
            question.textContent = 'Game Over!'
            document.getElementsByTagName("body")[0].style.backgroundColor = "red"
        }
    } else if (guess === magicNum) {
        question.textContent = 'Well Done'
        document.querySelector(".score").textContent = score
        document.getElementsByTagName("body")[0].style.backgroundColor = "#60b347"
        document.querySelector(".number").textContent = magicNum
        document.querySelector("#hide").style.display = "block"
    }
    })


const reStart = document.querySelector(".again");

reStart.addEventListener("click", function(){
    score = 10;
    magicNum = Math.trunc(Math.random(0) * 10) + 1;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#282829"

})
   
// BTN loops


const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function(){
    modal.classList.add("hidden")
};

const openModal = function (){
        modal.classList.remove("hidden")
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener("click", closeModal);

document.addEventListener('keydown', function(eventTest){
        if (!modal.classList.contains("hidden")){
            closeModal();
        }
            
})