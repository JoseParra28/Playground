

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

let money = prompt("How much money do u have?")

function buyFlowers(item){
    let flower = Math.floor(money / item)
    console.log("You can buy" + " " + flower + " " + "flowers" )
    if (money <= item){
        console.log("You dont't have enough money")
    }else if (money >= item * 4){
        console.log("wow! you can buy so many flowers!!" + flower)
    }else {
        return flower 
    }
    
}
buyFlowers(19.99)
