

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

// let question = prompt("How much money do you have?")

// function shop(item){
//     let buyFruit = Math.floor(question / item )
//         window.write("<h1>" + "You can buy " + buyFruit + " items" + "</h1>")
//     if (question < item){
//         console.log("Sorry you dont have enough money")
//     } else if (question >= item * 4 ){
//         console.log("Wow you can buy so may items " + buyFruit + " in total")
//     }else {
//         return buyFruit
//     }
// }
// shop(5)

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


// let userInput = prompt("How much money do you have?")

// function check (itemPrice){
//     let cashier = Math.floor(userInput / itemPrice)
//     console.log("You can buy " + cashier + " items")
//     if (userInput < itemPrice){
//         console.log("Sorry you dont have enough money")
//     } else if (userInput > itemPrice * 4){
//         console.log("Wow! You have so much money!")
//     } else if (userInput == NaN){
//          console.log("please only enter numbers")    
//     } else {
//         return cashier 
//     }
// }
// check(10.99)



const choice = ["strawberry", "banana", "anana"];
let question = prompt("What do you want" + choice);

function priceCheck(){
  for (let x of choice) {
    if (question == choice[0]){
      console.log(choice[0] + " cost 20 euros")
      let cash = prompt("How much money do you have")
      function cashier(item){
        let money = Math.floor(cash / item)
        if (cash < item){
          console.log("You dont have enough money" + money)
        }else if(cash > item) {
          console.log("You can buy " + money + "item" + choice)
        } else {
          return cashier
        }
      }
    }else if (question == choice[1]){
      console.log(choice[1] + " cost 26 euros")
    }else if (question == choice[2]){
      console.log(choice[2] + " cost 29 euros")
    }
  }
}

priceCheck()
