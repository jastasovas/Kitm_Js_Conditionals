//---------------Unit 1-----------------------------------------//

// let yourGrade = parseInt(prompt("Enter your grade:"));

// if (yourGrade >= 1 && yourGrade <= 3) {
//   console.log("Neigiamas pazymys!");
// } else if (yourGrade >= 4 && yourGrade <= 5) {
//   console.log("Teigiamas, bet reikia pasistengti!");
// } else if (yourGrade >= 6 && yourGrade <= 7) {
//   console.log("Vidutiniskai, ar tikrai tau to gana?");
// } else if (yourGrade >= 8 && yourGrade <= 9) {
//   console.log("Pagirk save!!");
// } else if (yourGrade == 10) {
//   console.log("Super!!!");
// } else {
//   console.log("Galbut suklydai ivesdamas pazymi");
// }

//---------------Unit 2-----------------------------------------//

// let month = prompt("Enter month name in Lithuanian language:");

// switch (month) {
//   case "Gruodis":
//   case "Sausis":
//   case "Vasaris":
//     console.log("It's winter month");
//     break;
//   case "Kovas":
//   case "Balandis":
//   case "Geguze":
//     console.log("It's spring month");
//     break;
//   case "Birzelis":
//   case "Liepa":
//   case "Rugpjutis":
//     console.log("It's summer month");
//     break;
//   case "Rugsejis":
//   case "Spalis":
//   case "Lapkritis":
//     console.log("It's autumn month");
//     break;
//   default:
//     console.log("Wrong input or written in lower case.");
// }

//---------------Unit 3-----------------------------------------//

// const time = new Date();
// let hourNow = time.getHours();

// if (hourNow >= 6 && hourNow <= 11) {
//   console.log("Labas rytas!");
// } else if (hourNow >= 11 && hourNow <= 18) {
//   console.log("Laba diena!");
// } else if (hourNow >= 18 && hourNow <= 21) {
//   console.log("Labas vakaras!");
// } else {
//   console.log("Naktis juk!!!!");
// }

//---------------Unit 4-----------------------------------------//

// const date = new Date();
// const day = date.getDay();

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }

//---------------Unit 5-----------------------------------------//

// let yourAge = parseInt(prompt("Enter your age here:"));

// if (yourAge <= 18) {
//   if (yourAge == 18) {
//     console.log("Pilnametis, gali tureti teises.");
//   } else {
//     console.log("Nepilnametis, teisiu negali tureti");
//   }
// } else {
//   console.log("Pilnametis, gali tureti teises");
// }

//---------------Unit 6-----------------------------------------//

// let yourNumber = parseInt(prompt("Enter number:"));

// if (yourNumber >= 0) {
//   if (yourNumber == 0) {
//     console.log("Your number is 0");
//   } else {
//     console.log("Your number is positive.");
//   }
// } else {
//   console.log("Your number is negative!!!");
// }

//---------------Unit 7-----------------------------------------//

// let isJoined = true;
// let isAdmin = true;

// if (isAdmin == true && isJoined == true) {
//   console.log("User is ADMIN and joined.");
// } else if (isAdmin == false && isJoined == true) {
//   console.log("User is not ADMIN but joined.");
// } else {
//   console.log("User is offline.");
// }

//---------------Unit 8-----------------------------------------//

// let isJoined = true;
// let isAdmin = true;
// let isUserAd = true;

// if (isJoined == true) {
//   if (isAdmin == true) {
//     console.log("Ad confirmed.");
//   } else {
//     console.log("User is 'Simple'.");
//   }
//   if (isUserAd == true) {
//     console.log("You can adjust ad.");
//   }
// } else {
//   console.log("Cant acces");
// }

//---------------Unit 9-----------------------------------------//

// let userInput = parseInt(prompt("Enter number:"));

// if (userInput > 50) {
//   console.log(`Your number is: ${userInput}`);
// } else {
//   console.log("Your number is less than 50.");
// }

//---------------Unit 10-----------------------------------------//

let result;
let sign = "*";
let numbOne = parseInt(prompt("Enter first number:"));
let numbTwo = parseInt(prompt("Enter second number:"));

switch (sign) {
  case "+":
    result = numbOne + numbTwo;
    console.log(`Result: ${result}`);
    break;
  case "-":
    result = numbOne - numbTwo;
    console.log(`Result: ${result}`);
    break;
  case "*":
    result = numbOne * numbTwo;
    console.log(`Result: ${result}`);
    break;
  case "/":
    result = numbOne / numbTwo;
    console.log(`Result: ${result}`);
    break;
  default:
    break;
}
