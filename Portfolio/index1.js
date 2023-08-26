const text = "A highly motivated and detail-oriented software engineer with a solid 2-year track record in the IT industry. My journey has been dedicated to mastering web development technologies, including HTML, CSS, JavaScript, and React JS. Alongside my frontend prowess, I bring proficiency in Java to the table, allowing me to craft holistic solutions that seamlessly connect frontend and backend.";

let index = 0;
const runningTextElement = document.getElementById("runningText");

function displayRunningText() {
  if (index < text.length) {
    runningTextElement.textContent += text[index];
    index++;
    setTimeout(displayRunningText, 50); // Adjust the timeout for the speed.
  }
}

displayRunningText();