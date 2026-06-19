function solve() {
  let words = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';

  words = words.split(" ");
  console.log(words[0][0]);
  
  if (currentCase.toLowerCase() === "camel case") {
    result += words[0];
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else if (currentCase.toLowerCase() === "pascal case") {
    for (let i = 0; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else {
      result += "Error!";
  }

  document.getElementById('result').textContent = result;
    
}