// // CONDITIONS EXERCISE 1
// // Skills: Conditions
// // Heating/Cooling exercise:
// // Define two variables: actualTemp and a desiredTemp. Write conditionals to tell the heating &
// // cooling system what to do. Log one of these three things: Run A/C, Run heat, or Standby.
//
// let actualTemp = prompt("What is the current temperature?");
// let desiredTemp = prompt("What is your desired temperature?")
//
// if (actualTemp > 80 && desiredTemp > 70) {
//   console.log("Run A/C");
// }
// else if (actualTemp < 70 && desiredTemp > 70) {
//   console.log("Run heat");
// }
// else if (actualTemp = 70 && desiredTemp >= 70) {
//   console.log("Standby");
// }





// Extended Challenges second exercise:
// Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”).
// Write a switch statement that checks the targetUnit and logs the temperature converted to
// that unit. Notes: K stands for Kelvin. C requires no conversion, print out the original temp.

// // Trial 1
// let tempCelsius = prompt("What is the temperature in Celsius?");
// let targetUnit = "F";
//
// if (tempCelsius < 100 && tempCelsius > -273) {
//   let answer = tempCelsius * 9 / 5 + 32;
//   console.log(answer + targetUnit);
// }




// Trial 2
let tempCelsius = prompt("What is the temperature in Celsius?");
let tempConv = prompt("Do you want to convert to F or K?");
let targetUnit = tempConv;

if (tempConv === "F") {
  let answer = tempCelsius * 9 / 5 + 32;
  console.log(answer + targetUnit);
}
else if (tempConv === "K") {
  let answer = tempCelsius * 1 + 273.15;
  console.log(answer + targetUnit);
}
