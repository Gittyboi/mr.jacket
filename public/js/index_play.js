// Created for codepad.co
// https://codepad.co/snippet/aSiGmsBE

//insert appropriat url of each file 

//var aud=document.getElementById("aud");
	
/*if(audio.name=="a1")
	var audio = new Audio(audio.name("a1").source);
if(aud.name=="a2")
	var audio = new Audio('//url of 2');
if(aud.name=="a3")
	var audio = new Audio('//url of 3');*/

var audio = new Audio(audio.name("a1").source);
audio.volume = 0.1;
audio.play();
 $('.fa-play').show();
      $('.fa-pause').hide();
$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').addClass('playing');
  
}
});