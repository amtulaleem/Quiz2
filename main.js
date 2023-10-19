document
  .getElementById("calculateScore")
  .addEventListener("click", calculateScore);

function calculateScore() {
  let cap = document.getElementById("cap").value.toLowerCase();
  let known = document.getElementById("known").value.toLowerCase();
  let largestCity = document.getElementById("largestCity").value.toLowerCase();
  let nationalPark = document
    .getElementById("nationalPark")
    .value.toLowerCase();
  let totalQuestions = 4;
  let correctAnswers = 0;

  // Question 1
  if (cap === "edmonton") {
    document.getElementById("res1").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res1").innerHTML = "Incorrect";
  }

  // Question 2
  if (known === "oil") {
    document.getElementById("res2").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res2").innerHTML = "Incorrect";
  }

  // Question 3
  if (largestCity === "calgary") {
    document.getElementById("res3").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res3").innerHTML = "Incorrect";
  }

  // Question 4
  if (nationalPark === "banff") {
    document.getElementById("res4").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res4").innerHTML = "Incorrect";
  }

  // Calculate the percentage
  let percentage = (correctAnswers / totalQuestions) * 100;
  document.getElementById("output").innerHTML =
    "Total Score: " +
    correctAnswers +
    "/" +
    totalQuestions +
    " (" +
    percentage +
    "%)";
}
