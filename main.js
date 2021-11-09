x = 0;
y = 0;
draw_apple = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
  document.getElementyId("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 

recognition.onresult = function(event) {
 console.log(event); 
 content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
}
function setup() { 
}

function draw() {
    if(draw_apple == "set")
    {
      document.getElementById("status").innerHTML = to_number + " Apples drawn";
      draw_apple = "";
    }
  }
  
  function speak(){
      var synth = window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      speak_data = "";
  }

  for (var i=1; i <= to_number; i++){
x = Math.floor (Math.random() *700);
y=Math.floor(Math.random() * 400);
9
image (apple, x, y, 50, 50);
}