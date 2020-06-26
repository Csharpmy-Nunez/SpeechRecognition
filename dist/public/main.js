$(document).ready(function(){
  populateDropdownDos();
  languageCount();
})

document.getElementById("btnSpeak").addEventListener("click", function(){
  var text = getInputValue('texttospeak');
  changRate();
  changeVolume();
  changePitch();
if(text.length != 0){
  speak();
}else{
  alert('Please enter text for the speech machine to execute');
}

});

//createCanvas(400, 100);
document.querySelector('.isSpeaking').style.display = 'none'; 
//background(0);

speech = new p5.Speech(); // speech synthesis object. 
speech.onLoad = voiceReady;

speech.started(startSpeaking);//Turns green when speaking
speech.ended(endSpeaking);//Turns black when stops speaking

function startSpeaking() {
//background(0, 255, 0);
document.querySelector('.isSpeaking').style.display = 'block'; 
}

function endSpeaking() {
//background(0);
document.querySelector('.isSpeaking').style.display = 'none'; 
}

function voiceReady() {
console.log('voice is ready');//Tells when the voice object is ready
let voices = speech.voices;
console.log(speech);
}
//Count of languages
function languageCount(){
  var counter = 0;
  //var message = '';
  for(i = 0; i < speech.voices.length; i++){
     counter++;
  }
  var ouput = document.getElementById('msg');
  ouput.innerHTML = counter + ' languages';
}
function populateDropdownDos(){
  var dropdown = document.getElementById('dropdown_');
  var fragment = document.createDocumentFragment();

  speech.voices.forEach(function(voice, index) {
    var option = document.createElement('option');
    option.innerHTML = voice.name;
    option.value = voice.name;
    fragment.appendChild(option);
  }, this);

  dropdown.appendChild(fragment);

}
//Populate combobox 
function populateDropdown(){
var dropdown = document.getElementById('dropdown_');

for (i = 0; i < speech.voices.length; i++) { 
       //console.log("Speech " + i + " is " + speech.voices[i].name);
       var option = document.createElement('option');
       option.innerHTML = speech.voices[i].name;
       option.value = speech.voices[i].name;
       dropdown.appendChild(option);
   }
}
//Change rate function
function changRate(){
  var rate = getInputValue('rate_adjuster');
  speech.setRate(rate);
}
//change volume function
function changeVolume(){
  var volume = getInputValue('volume_adjuster');
  speech.setVolume(volume);
}
//Change pitch function
function changePitch(){
  var pitch = getInputValue('pitch_adjuster');
  speech.setPitch(pitch);
}

function speak(){
let voices = speech.voices;
 //Get text to speak
 var text = getInputValue('texttospeak');
 //Get value from dropdown
 var voicetype = document.getElementById("dropdown_").value;
 speech.setVoice(voicetype);
 speech.speak(text);//say something
 console.log('Mouse has been pressed' + voicetype);
}


//Function to get form values
function getInputValue(id){
return document.getElementById(id).value;
}

