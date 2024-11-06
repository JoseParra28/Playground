

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


// let user1 = prompt("Lover 1")
// let user2 = prompt("Lover 2")

// function match(){
//     let checher = Math.random();
//     checher = Math.floor(checher * 100) + 1;
//     document.write("<h1>" + user1 + " and " + user2 + " have a " + checher + "% chance of falling in love" + "</h1>")
//     if (checher > 80 && checher > 90 ){
//         document.write("<h2" + user2 + user1 +" wow you guys are true soul mates" + "</h2>")
//     }else if (checher < 20 || checher < 10){
//         document.write("<h2>" + "Maybe not a match" + "</h2>")
//     }else {
//         return document.write("<h2>" + "have fun together" + "</h2>")
//     }
// }
// match()

// let check = prompt("Welcome to my party, please enter you name.")
// let guessList = ["sara", "andrew", "michael", "teresa", "jack"]

// function guessCheck(){
    
//     if (guessList.includes(check)){
//         document.write("<h2>" + "welcome " + check + "</h2>")
//     } else {
//         document.write("<h2>" + "sorry not today, " + check + " is not in my list" + "</h2>")
//     }
// }
// guessCheck()

// let outPut = [];
// outPut.push()

// let names = ["jose", "nicolas", "maria", "jack", "peter"]

// function whoPays (names){
//     let numberOfP = names;
//     let randomSelect = Math.floor(Math.random() * numberOfP)
//     let randomPerson = [randomSelect]

//     return randomPerson + "is pans"
// }
// whoPays()




// const myprofile = {
//             myName: "Jose",
//             ocupation: "Developer",
//             birthYear: 1993 ,
//             currentYear:2024,
//             drinks: false
// }

// const profile = `I am ${myprofile.myName}, I am a ${myprofile.birthYear-myprofile.currentYear}, years old ${myprofile.ocupation}/n`;
// document.write("<h2>" + profile + "</h2>")

// For loops keep riunning while condition instru

// for (let rep=1; rep <= 10; rep++){
//     console.log(`Weigths lifting reps ${rep}` )
// }

// const profile = [
//     "jose",
//     "Parra",
//     "Developer",
//     "boyfriend is nicolas",
//     true,
//     1993 -2024,
//     ["jose", "nicolas"]
// ]
// for(let pic = 0; pic < profile.length; pic++){
//     document.write("<h1>" + profile[pic] + "</h1>")
// }

// const years = [1991,2007, 1969, 2020];
// const ages = [];
// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages)

// let input1 = prompt("First input");
// let operators = prompt(["+ ", "- ", "/ ", "* "]);
// let input2 = prompt("Second imput");

// function calculator(){
//     let addition = Math.floor(input1 + input2);
//     let substraction = Math.floor(input1 - input2);
//     let divicion = Math.floor(input1 / input2);
//     let multiplication = Math.floor(input1 * input2);
//     if(operators.includes(operators[0])){
//         console.log(typeof(addition))
//     } else if(operators.includes(operators[1])){
//         console.log(substraction)
//     }else if(operators.includes(operators[2])){
//         console.log(divicion)
//     }else if (operators.includes(operators[3])){
//         console.log(multiplication)
//     }
//     else {{
//         return console.log("You must enter a numeric value")
//     }}
// }
// calculator()
let input1 = prompt("First input");








