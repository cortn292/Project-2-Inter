var w = document.getElementById('whisper');
var hideT;
 
function showWhisper(msg) {
  clearTimeout(hideT);
  w.textContent = msg;
  w.classList.add('show');
  hideT = setTimeout(function(){ w.classList.remove('show'); }, 4000);
}

document.addEventListener('mousemove', function(e) {
  if (e.clientY < 50) showWhisper("Please leave.");
});

setTimeout(function(){
  var el = document.getElementById('subtitletext');
  if (el) el.textContent = "i've been waiting for you to leave.";
}, 15000);
