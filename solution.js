// Coding Challenge
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// a function to get average

const calcAvg = (a, b, c) => {
  return (a + b + c) / 3;
};

const avgDolphin = calcAvg(96, 108, 89);
const avgKaola = calcAvg(88, 91, 110);

console.log(avgDolphin, avgKaola);

if (avgDolphin > avgKaola) {
  console.log("Dolphin wins");
} else if (avgKaola > avgDolphin) {
  console.log("Kaola wins");
} else {
  console.log("There is draw");
}

// bonus
if (avgDolphin > avgKaola && avgDolphin >= 100) {
  console.log("Dolphin wins");
} else if (avgKaola > avgDolphin && avgKaola >= 100) {
  console.log("Kaola wins");
} else {
  console.log("There is draw");
}
