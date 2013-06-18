panoramajavascriptDiv=document.getElementById('panoramajavascript'); dragStartX=0;
dragStartY=0;
deltaX=3.0;
deltaY=0.0;
backgroundPosX=0.0;
backgroundPosY=-5.0;
timeout=20;
timerId=null;

function dragStart(e) {
	if (!e) var e = window.event;
	panoramajavascriptDiv.onmousemove=drag;
	dragStartX=e.clientX;
	dragStartY=e.clientY;
	deltaX=0;
	deltaY=0;
	panoramajavascriptDiv.onmouseout=dragStop;
	if (timerId) {
		window.clearTimeout(timerId);
	}
	timerId=window.setTimeout('scroll()',timeout);
}

function drag(e) {
	if (!e) var e = window.event;
	deltaX=(e.clientX-dragStartX)/5;
	deltaY=(e.clientY-dragStartY)/5;
}

function dragStop() {
	panoramajavascriptDiv.onmousemove=null;
	panoramajavascriptDiv.onmouseout=null;
	if (timerId) {
		window.clearTimeout(timerId);
	}
}

function scroll() {
	backgroundPosX-=deltaX;
	backgroundPosY=Math.max(-20,Math.min(0,backgroundPosY-deltaY));
	panoramajavascriptDiv.style.backgroundPosition=Math.floor(backgroundPosX)+"px "+Math.floor(backgroundPosY)+"px";
	timerId=window.setTimeout('scroll()',timeout);
}

panoramajavascriptDiv.onmousedown=dragStart;
panoramajavascriptDiv.onmouseup=dragStop;
timerId=window.setTimeout('scroll()',50);