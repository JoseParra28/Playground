let allDrums = document.querySelectorAll(".drum");

for(let i =0; i < allDrums.length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        console.log(`You have checled ${i}`)
    })
}

