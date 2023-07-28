var today = new Date();
var startDate = new Date('August 1, 2022');
var timeDiff = Math.abs(today.getTime() - startDate.getTime());
var days = Math.ceil(timeDiff / (1000 * 3600 * 24));
document.getElementById("counter").innerHTML = "We have spent " + days + " Days together";

function startCounter(target, duration, targetValue) {
  var counter = document.getElementById(target);
  var start = 0;
  var end = targetValue;
  var range = end - start;
  var current = start;
  var increment = 1;
  var stepTime = Math.abs(Math.floor(duration / range));

  var timer = setInterval(function() {
    counter.innerText = current;

    if (current === end) {
      clearInterval(timer);
    }

    current += increment;
  }, stepTime);
}

startCounter('counter', 15000, days); // Start the counter with a duration of 2000 milliseconds (2 seconds) and stop at the number of days



function saveText() {
  // Get the value of the textarea
  const submittedText = document.getElementById('textArea').value;

  // Save the text to local storage
  localStorage.setItem('submittedText', submittedText);

  // Display the submitted text on the page
  const savedTextElement = document.getElementById('savedText');
  savedTextElement.textContent = "Submitted Text: " + submittedText;
}

// On page load, check if there's any previously submitted text and display it
window.onload = function () {
  const submittedText = localStorage.getItem('submittedText');
  if (submittedText) {
      const savedTextElement = document.getElementById('savedText');
      savedTextElement.textContent = "Submitted Text: " + submittedText;
  }
};
