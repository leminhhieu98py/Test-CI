const api_url =
  "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
let displayMain = document.getElementById("display");
let quesion = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let startBtn = document.getElementById("start-btn");
let playagainBtn = document.getElementById("playagain-btn");
let scores = document.getElementById("score");
let correct = document.getElementById("correct");
let congratulation = document.getElementById("congratulation");
let finalScore = document.getElementById("finalScore");
let count = 0;
let score = 0;

function end() {
  displayMain.style.display = "none";
  correct.style.display = "none";
  incorrect.style.display = "none";
  playagainBtn.style.display = "block";
  congratulation.style.display = "block";
  finalScore.innerHTML = score;
  count = 0;
  score = 0;
}

function getData() {
  function displayQandA(data, count) {
    quesion.innerHTML = data.results[count].question;
    answer1.innerHTML = data.results[count].correct_answer;
    answer2.innerHTML = data.results[count].incorrect_answers[0];
    answer3.innerHTML = data.results[count].incorrect_answers[1];
    answer4.innerHTML = data.results[count].incorrect_answers[2];
  }

  playagainBtn.style.display = "none";
  displayMain.style.display = "none";
  correct.style.display = "none";
  incorrect.style.display = "none";
  congratulation.style.display = "none";

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    congratulation.style.display = "none";
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        scores.innerHTML = score;
        displayMain.style.display = "block";
        displayQandA(data, count);
        answer1.addEventListener("click", () => {
          correct.style.display = "block";
          incorrect.style.display = "none";
          score += 10;
          scores.innerHTML = score;
          if (count < 4) {
            count++;
            displayQandA(data, count);
          } else {
            end();
          }
        });
        answer2.addEventListener("click", () => {
          correct.style.display = "none";
          incorrect.style.display = "block";
          if (count < 4) {
            count++;
            displayQandA(data, count);
          } else {
            end();
          }
        });
        answer3.addEventListener("click", () => {
          correct.style.display = "none";
          incorrect.style.display = "block";
          if (count < 4) {
            count++;
            displayQandA(data, count);
          } else {
            end();
          }
        });
        answer4.addEventListener("click", () => {
          correct.style.display = "none";
          incorrect.style.display = "block";
          if (count < 4) {
            count++;
            displayQandA(data, count);
          } else {
            end();
          }
        });
      });
  });

  playagainBtn.addEventListener("click", () => {
    playagainBtn.style.display = "none";
    congratulation.style.display = "none";
    startBtn.style.display = "block";
  });
}

getData();
