

document.getElementById("btnSpeak").addEventListener("click", function(){
 speak();
});

function setup(){
}
function speak(){
   // noCanvas();
   let language = navigator.language || 'en-US';
   
     let speechRecorder = new p5.SpeechRec(language, gotSpeech);
   
     //Set continuous mode to make it listen continuously
     let continuous = true;
     let interim = false;
     //Start listening
     //speechRecorder.start(continuous, interim);
   
   
     //Start listening
     speechRecorder.start();
   
     //Create gotSpeech function
     function gotSpeech(){
   
       if(speechRecorder.rerultValue){
         createP(speechRecorder.resultString);
         display(speechRecorder.resultString);
       }
       console.log(speechRecorder);
       display(speechRecorder.resultString);
     }
}
//---------------------------------------------------------
function display(text){
  var ouput = document.getElementById('text_');
  ouput.innerHTML = '>> ' + text;
}