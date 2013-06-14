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
			document.body.style.cursor = 'move';
		});
		
		mapImg.on('mouseout', function() {
			document.body.style.cursor = 'pointer';
		});
		
		mapLayer.add(mapImg);
		mapLayer.draw();
    };
	
	keyPoint.onload = function(){
		var perola = new Kinetic.Image({
			image:keyPoint,
			x: 1284,
			y: 1397,
			width: 24,
			height: 24,
		});
		
		var derecho = new Kinetic.Image({
			image:keyPoint,
			x: 1086,
			y: 1330,
			width: 24,
			height: 24,
		});
		
		var veterinaria = new Kinetic.Image({
			image:keyPoint,
			x: 778,
			y: 1258,
			width: 24,
			height: 24,
		});
		
		var musica = new Kinetic.Image({
			image:keyPoint,
			x: 1422,
			y: 1310,
			width: 24,
			height: 24,
		});
		
		var artes = new Kinetic.Image({
			image:keyPoint,
			x: 1407,
			y: 1174,
			width: 24,
			height: 24,
		});
		
		var sindu = new Kinetic.Image({
			image:keyPoint,
			x: 1551,
			y: 1261,
			width: 24,
			height: 24,
		});
		
		var capilla = new Kinetic.Image({
			image:keyPoint,
			x: 1426,
			y: 1575,
			width: 24,
			height: 24,
		});
		
		var labIngeominas = new Kinetic.Image({
			image:keyPoint,
			x: 1503,
			y: 839,
			width: 24,
			height: 24,
		});
		
		var patios = new Kinetic.Image({
			image:keyPoint,
			x: 1370,
			y: 724,
			width: 24,
			height: 24,
		});
		
		var astronomia = new Kinetic.Image({
			image:keyPoint,
			x: 1258,
			y: 714,
			width: 24,
			height: 24,
		});
		
		var paso26 = new Kinetic.Image({
			image:keyPoint,
			x: 1208,
			y: 1437,
			width: 24,
			height: 24,
		});
		
		var paso45 = new Kinetic.Image({
			image:keyPoint,
			x: 1530,
			y: 1364,
			width: 24,
			height: 24,
		});
		
		var aulas = new Kinetic.Image({
			image:keyPoint,
			x: 1173,
			y: 925,
			width: 24,
			height: 24,
		});
		
		var salmona = new Kinetic.Image({
			image:keyPoint,
			x: 893,
			y: 1418,
			width: 24,
			height: 24,
		});
		
		var cytAtras = new Kinetic.Image({
			image:keyPoint,
			x: 1026,
			y: 857,
			width: 24,
			height: 24,
		});
		
		var cytPlaza = new Kinetic.Image({
			image:keyPoint,
			x: 1063,
			y: 950,
			width: 24,
			height: 24,
		});
		
		var ciencias = new Kinetic.Image({
			image:keyPoint,
			x: 854,
			y: 1026,
			width: 24,
			height: 24,
		});
		
		var zootecnia = new Kinetic.Image({
			image:keyPoint,
			x: 899,
			y: 1221,
			width: 24,
			height: 24,
		});
		
		var plazaVet = new Kinetic.Image({
			image:keyPoint,
			x: 837,
			y: 1240,
			width: 24,
			height: 24,
		});
		
		var iei = new Kinetic.Image({
			image:keyPoint,
			x: 1274,
			y: 937,
			width: 24,
			height: 24,
		});
		
		var plazaChe = new Kinetic.Image({
			image:keyPoint,
			x: 1290,
			y: 1296,
			width: 24,
			height: 24,
		});
		
		var ingenieria = new Kinetic.Image({
			image:keyPoint,
			x: 1333,
			y: 1052,
			width: 24,
			height: 24,
		});
		
		var cadeIng = new Kinetic.Image({
			image:keyPoint,
			x: 1466,
			y: 991,
			width: 24,
			height: 24,
		});
		
		var medicina = new Kinetic.Image({
			image:keyPoint,
			x: 1027,
			y: 1220,
			width: 24,
			height: 24,
		});
		
		var economia = new Kinetic.Image({
			image:keyPoint,
			x: 1650,
			y: 1083,
			width: 24,
			height: 24,
		});
		
		var salida26 = new Kinetic.Image({
			image:keyPoint,
			x: 1170,
			y: 1626,
			width: 24,
			height: 24,
		});
		
		perola.on('click touchstart', function() {
			window.location.href = "Panoramicas/La_perola.html";
		});
		
		derecho.on('click touchstart', function() {
			window.location.href = "Panoramicas/Derecho.html";
		});
		
		veterinaria.on('click touchstart', function() {
			window.location.href = "Panoramicas/Veterinaria.html";
		});
		
		musica.on('click touchstart', function() {
			window.location.href = "Panoramicas/Musica.html";
		});
		
		artes.on('click touchstart', function() {
			window.location.href = "Panoramicas/Artes.html";
		});
		
		sindu.on('click touchstart', function() {
			window.location.href = "Panoramicas/Sindu.html";
		});
		
		capilla.on('click touchstart', function() {
			window.location.href = "Panoramicas/Capilla.html";
		});
		
		labIngeominas.on('click touchstart', function() {
			window.location.href = "Panoramicas/LabIngeominas.html";
		});
		
		patios.on('click touchstart', function() {
			window.location.href = "Panoramicas/Patios.html";
		});
		
		astronomia.on('click touchstart', function() {
			window.location.href = "Panoramicas/Astronomia.html";
		});
		
		paso26.on('click touchstart', function() {
			window.location.href = "Panoramicas/Paso26.html";
		});
		
		paso45.on('click touchstart', function() {
			window.location.href = "Panoramicas/Paso45.html";
		});
		
		aulas.on('click touchstart', function() {
			window.location.href = "Panoramicas/Aulas.html";
		});
		
		salmona.on('click touchstart', function() {
			window.location.href = "Panoramicas/Salmona.html";
		});
		
		cytAtras.on('click touchstart', function() {
			window.location.href = "Panoramicas/CytAtras.html";
		});
		
		cytPlaza.on('click touchstart', function() {
			window.location.href = "Panoramicas/CytPlaza.html";
		});
		
		ciencias.on('click touchstart', function() {
			window.location.href = "Panoramicas/Ciencias.html";
		});
		
		zootecnia.on('click touchstart', function() {
			window.location.href = "Panoramicas/Zootecnia.html";
		});
		
		plazaVet.on('click touchstart', function() {
			window.location.href = "Panoramicas/PlazaVet.html";
		});
		
		iei.on('click touchstart', function() {
			window.location.href = "Panoramicas/Iei.html";
		});
		
		plazaChe.on('click touchstart', function() {
			window.location.href = "Panoramicas/PlazaChe.html";
		});
		
		ingenieria.on('click touchstart', function() {
			window.location.href = "Panoramicas/Ingenieria.html";
		});
		
		cadeIng.on('click touchstart', function() {
			window.location.href = "Panoramicas/CadeIng.html";
		});
		
		medicina.on('click touchstart', function() {
			window.location.href = "Panoramicas/Medicina.html";
		});
		
		economia.on('click touchstart', function() {
			window.location.href = "Panoramicas/Economia.html";
		});
		
		salida26.on('click touchstart', function() {
			window.location.href = "Panoramicas/Salida26.html";
		});
		
		pointsLayer.add(perola);
		pointsLayer.add(derecho);
		pointsLayer.add(veterinaria);
		pointsLayer.add(musica);
		pointsLayer.add(artes);
		pointsLayer.add(sindu);
		pointsLayer.add(capilla);
		pointsLayer.add(labIngeominas);
		pointsLayer.add(patios);
		pointsLayer.add(astronomia);
		pointsLayer.add(paso26);
		pointsLayer.add(paso45);
		pointsLayer.add(aulas);
		pointsLayer.add(salmona);
		pointsLayer.add(cytAtras);
		pointsLayer.add(cytPlaza);
		pointsLayer.add(ciencias);
		pointsLayer.add(zootecnia);
		pointsLayer.add(plazaVet);
		pointsLayer.add(iei);
		pointsLayer.add(plazaChe);
		pointsLayer.add(ingenieria);
		pointsLayer.add(cadeIng);
		pointsLayer.add(medicina);
		pointsLayer.add(economia);
		pointsLayer.add(salida26);
		
		pointsLayer.draw();
	};
	
    stage.add(mapLayer);
	stage.add(pointsLayer);
	
	
    map.src ="Imagenes/map.jpg";
	keyPoint.src = "res/dot.png";