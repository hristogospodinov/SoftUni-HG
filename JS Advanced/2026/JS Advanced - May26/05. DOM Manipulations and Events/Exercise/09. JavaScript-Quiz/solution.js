function solve() {
  let btns = document.querySelectorAll('li.quiz-answer');
  
  for(let btn of btns) {
    btn.addEventListener('click', checkAndContinue);
  }

  let score = 0;
  let currentQuestion = 0;

  let correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ]

  function checkAndContinue(event) {
    let answer = event.currentTarget.querySelector("p").textContent;

    if (answer === correctAnswers[currentQuestion]) {
        score++;
    }

    let currentSection = event.currentTarget.parentElement.parentElement;

    currentQuestion++;

    if (currentQuestion === correctAnswers.length) {
        currentSection.style.display = "none";

        document.getElementById("results").style.display = "block";

        if (score === correctAnswers.length) {
            document.querySelector("#results h1").textContent =
                "You are recognized as top JavaScript fan!";
        } else {
            document.querySelector("#results h1").textContent =
                `You have ${score} right answers`;
        }
    } else {
        let nextSection = currentSection.nextElementSibling;

        currentSection.style.display = "none";
        nextSection.style.display = "block";
    }
  }
}
