var keyPoint = new Image();
	var mapLayer = new Kinetic.Layer();
	var pointsLayer = new Kinetic.Layer();
	
	var stage = new Kinetic.Stage({
        container: "content",
		x: -440,
		y: -850,
        width: 1921,
        height: 2011,
		draggable: true,

        dragBoundFunc: function(pos) {
			var newX = pos.x;
			var newY = pos.y;
				
			if(newX > 0) {newX = 0;}
			if(newX <= -645) {newX = -645;}
				
			if(newY > 0) {newY = 0;}
			if(newY <= -1274) {newY = -1274;}
				
			return{
				x: newX,
				y: newY
			};
        }
    });
	
	var map = new Image();
    map.onload = function() {
        var mapImg = new Kinetic.Image({
			image: map,
			x: 0,
			y: 0,
			width: 2011,
			height: 1921,
		});
	
		mapImg.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
		});
		
		mapImg.on('mouseout', function() {
			document.body.style.cursor = 'default';
		});
		
		mapLayer.add(mapImg);
		mapLayer.draw();
    };
	
	keyPoint.onload = function(){
		var perolaPoint = new Kinetic.Image({
			image:keyPoint,
			x: 1287,
			y: 1401,
			width: 16,
			height: 16,
		});
		
		var derechoPoint = new Kinetic.Image({
			image:keyPoint,
			x: 1090,
			y: 1334,
			width: 16,
			height: 16,
		});
		
		var veterinariaPoint = new Kinetic.Image({
			image:keyPoint,
			x: 903,
			y: 1225,
			width: 16,
			height: 16,
		});
		
		perolaPoint.on('click touchstart', function() {
			window.location.href = "Panoramicas/La_perola.html";
		});
		
		derechoPoint.on('click touchstart', function() {
			window.location.href = "Panoramicas/Derecho.html";
		});
		
		veterinariaPoint.on('click touchstart', function() {
			window.location.href = "Panoramicas/Veterinaria.html";
		});
		
		pointsLayer.add(perolaPoint);
		pointsLayer.add(derechoPoint);
		pointsLayer.add(veterinariaPoint);
		
		pointsLayer.draw();
	};
	
    stage.add(mapLayer);
	stage.add(pointsLayer);
	
	
    map.src ="Imagenes/map.png";
	keyPoint.src = "res/dot.png";