

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

// let money = prompt("How much money do u have?")

// function buyFlowers(item){
//     let flower = Math.floor(money / item)
//     console.log("You can buy" + " " + flower + " " + "flowers" )
//     if (money <= item){
//         console.log("Sorry you dont't have enough money")
//     }else if (money >= item * 4){
//         console.log("wow! you can buy so many flowers!!" + flower)
//     }else {
//         return flower 
//     }
    
// }
// buyFlowers(19.99)

// let question = prompt("Whats my name")

// const myList = ["Apple", "banana", "strawberry", "pear"]

// function answer(value){
//     if (question == value){
//         document.write("<h1>" + question + " Well done" + "</h1>")
//     }else if (question < value){
//         document.write("<li>" + myList[0] + "</li>",
//                        "<li>" + myList[2] + "</li>"
//         )
//     }else if (question > value){
//         myList.push("Lemon")
//         document.write("<h1>" + myList[4] + "</h1>")
//     }else {
//         document.write("<h1>" + "Not a number" + "</h1>")
//     }

// }
// answer(60)
// let fruits = "apple";


let user1 = prompt("Lover 1")
let user2 = prompt("Lover 2")

function match(){
    let checher = Math.random();
    checher = Math.floor(checher * 100) + 1;
console.log(user1 + " and " + user2 + " have a " + checher + "% chance of falling in love")
}
match()

