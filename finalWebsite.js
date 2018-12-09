	
	 
	
function starTime(){
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	min = checkTime(min);
	sec = checkTime(sec);
	document.getElementById("para").innerHTML= hour + ":" + min + ":" + sec;
	var timeOut = setTimeout(starTime, 500);
}
function checkTime(i){
	if(i < 10) {i = "0" + i};
	return i;
}

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 175) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}


