const { he } = require("@faker-js/faker");

/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */
function calculateBMI(weight, height) {
  height = height / 100;
  const BMI = weight / Math.pow(height, 2);
  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  let BMIState;
  if (BMI < 0) {
    BMIState = "You are loco";
  } else if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    BMIState = "healthy";
  } else if (BMI >= 25 && BMI <= 29.9) {
    BMIState = "overweight";
  } else if (BMI >= 30) {
    BMIState = "obese";
  } else {
    BMIState = "Invalid value!";
  }
  return BMIState;
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState = "not healthy";
  if (
    (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) ||
    (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) ||
    (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) ||
    (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) ||
    (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) ||
    (age >= 65 && BMI >= 24 && BMI <= 29)
  ) {
    BMIState = "healthy";
  }
  /**
   * Stop making changes here!
   */
  return BMIState;
}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };
