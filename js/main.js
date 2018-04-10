$(document).foundation();

function move() {
   var a = document.getElementById('about');
   a.style.left = 0;
   a.style.top = 0;
   document.onkeydown = function(e) {
    var e = window.event ? window.event : e;
    if(e.keyCode == 38) { //up
     a.style.top = parseInt(a.style.top) - 50 + 'px';
   }
  if(e.keyCode == 40) { //down
   a.style.top = parseInt(a.style.top) + 50 + 'px';
  }
  if(e.keyCode == 37) { //left
   a.style.left = parseInt(a.style.left) - 50 + 'px';
  }
  if(e.keyCode == 39) { //right
   a.style.left = parseInt(a.style.left) + 50 + 'px';
  }
 }
}
})();
