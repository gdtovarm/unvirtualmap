setup = function(){

	var c = document.getElementById("cvs");
	var context1 = c.getContext("2d");

	c.width = 400; //window.innerWidth;
	c.height = 400; //window.innerHeight;

	var img = new Image();
	
	img.onload = function(){
		console.log("IMAGE!!!");
		context1.drawImage(img, 0, 0);
	}
	
	img.src = 'res/dawg.gif';
	
}

setup();
