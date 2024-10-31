

let question = prompt("Whats's my number");
let correct = "Thats correct";
let wrong = "Thats wrong";
let myNum = 31;

function check(){
    if (question == myNum){
        console.log(correct + " " + myNum + " " + "was my number")
    }else if (question < myNum){
        console.log("Thats too low")
    } else if (question > myNum){
        console.log("Thats too high")
    }
    else {
        console.log(wrong + " " + "Only numbers please") 
    }
}
check()