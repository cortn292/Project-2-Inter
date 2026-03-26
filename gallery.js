var w = document.getElementById('whisper');
var hideT;
function showWhisper(msg) {
  clearTimeout(hideT);
  w.textContent = msg;
  w.classList.add('show');
  hideT = setTimeout(function(){ w.classList.remove('show'); }, 4500);
}
 
document.addEventListener('mousemove', function(e) {
  if (e.clientY < 50) showWhisper("the images will still be here.");
});
 
var wasHidden = false;
document.addEventListener('visibilitychange', function() {
  if (document.hidden) { wasHidden = true; }
  else if (wasHidden) {
    wasHidden = false;
    setTimeout(function(){ showWhisper("you switched tabs.what were you doing?"); }, 600);
  }
});
 
function setWarmth(val) {
  document.getElementById('warmthVal').textContent = val + '%';
  document.querySelectorAll('.gallery-item:not(#brokenImg) img').forEach(function(img) {
    img.style.filter = 'sepia(' + val/180 + ') saturate(' + (1 + val/120) + ')';
  });
  if (parseInt(val) >= 70) {
    document.getElementById('bod').classList.add('broken');
    document.getElementById('brokenImg').style.display = 'block';
  } else {
    document.getElementById('bod').classList.remove('broken');
    document.getElementById('brokenImg').style.display = 'none';
  }
}
 
var loaded = false;
function loadMore() {
  if (loaded) return;
  loaded = true;
  var btn = document.getElementById('loadBtn');
  btn.textContent = 'loading...';
  setTimeout(function() {
    btn.textContent = 'no more photos found.';
    btn.style.cursor = 'default';
    document.getElementById('wrongDetails').open = true;
    document.getElementById('wrongBody').innerHTML =
      "i don't know who did that.<br><br>i don't remember uploading those photos.";
    document.getElementById('bod').classList.add('broken');
  }, 1800);
}