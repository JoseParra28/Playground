

// let question = prompt("Whats's my number");
// let correct = "Thats correct";
// let wrong = "Thats wrong";
// // let myNum = 31;

// function check(myNum){
//     if (question == myNum){
//         console.log(correct + " " + myNum + " " + "was my number")
//     }else if (question < myNum){
//         console.log("Thats too low")
//     } else if (question > myNum){
//         console.log("Thats too high")
//     }
//     else {
//         console.log(wrong + " " + "Only numbers please") 
//     }
// }
// check(343)
 
// function getMilk(money){
//     let numberOfBottles = money / 1.5;
//     console.log("Buy" + " " + Math.floor(numberOfBottles) + " " + "Botteles of milk")
// }
// getMilk(5)

function lifeInWeeks(age){
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52
    let months = yearsRemaining * 12

    console.log("Yuo have" + ", " + yearsRemaining + ", " + months + ", " + "months" + " " + weeks + " " + "weeks" + "and" + " " + days + " " + "remaining")
}
lifeInWeeks(31)