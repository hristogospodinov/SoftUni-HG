function solve() {
  let btns = document.querySelectorAll('li.quiz-answer');
  
  for(let btn of btns) {
    btn.addEventListener('click', checkAndContinue);
  }

  let score = 0;
  let currentQuestion = 0;

  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ]

  function checkAndContinue(event) {
    const answer = event.currentTarget.querySelector("p").textContent;

    if (answer === correctAnswers[currentQuestion]) {
        score++;
    }

    const currentSection = event.currentTarget.parentElement.parentElement;

    currentQuestion++;

    currentSection.style.display = "none";

    if (currentQuestion === correctAnswers.length) {      
      document.getElementById("results").style.display = "block";

      if (score === correctAnswers.length) {
        document.querySelector("#results h1").textContent =
                "You are recognized as top JavaScript fan!";
      } else {
        document.querySelector("#results h1").textContent =
                `You have ${score} right answers`;
      }
    } else {
      const nextSection = currentSection.nextElementSibling;
      nextSection.style.display = "block";
    }
  }
}
