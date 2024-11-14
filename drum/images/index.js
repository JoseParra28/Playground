let allDrums = document.querySelectorAll(".drum");

for(let i =0; i < allDrums.length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let btnInner = this.innerHTML
        makeSound(btnInner)
      
        }
    )}

document.addEventListener("keydown", function(event){
    makeSound(event.key)
})

function makeSound (key){
    switch (key) {
        case "w":
            let audio1 = new Audio("/drum/images/sounds/crash.mp3")
            let numbers = 0;
            numbers++;
            audio1.play()
            
            console.log(`You have chicked ${numbers} times on drum ${this.innerHTML} `)
            break;
            case "a":
                let audio2 = new Audio("/drum/images/sounds/kick-bass.mp3")
                audio2.play()

                break;
                case "s":
                    let audio3 = new Audio("/drum/images/sounds/snare.mp3")
                    audio3.play()
                    break;
                    case "d":
                        let audio4 = new Audio("/drum/images/sounds/tom-1.mp3")
                        audio4.play()
                        break;
                        case "j":
                            let audio5 = new Audio("/drum/images/sounds/tom-2.mp3")
                            audio5.play()
                            break;
                            case "k":
                                let audio6 = new Audio("/drum/images/sounds/tom-3.mp3")
                                audio6.play()
                                break;
                                case "l":
                                    let audio7 = new Audio("/drum/images/sounds/tom-4.mp3")
                                    audio7.play()
                                    break;
    
        default:console.log(btnInner)
            break;
}}