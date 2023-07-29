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
  
  // Display the value on the website
  const displayArea = document.getElementById('displayArea');
  displayArea.innerHTML = submittedText;
}

//to-do list

const inputbox= document.getElementById('input-box');
const listcontainer= document.getElementById('list');

function addTask()
{
  if(inputbox.value==='')
  {
    alert("You must write something");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
  
  }
  inputbox.value='';
  saveData();
}

function saveData()
{
  localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask()
{
  listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();
