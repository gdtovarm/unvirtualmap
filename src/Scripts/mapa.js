var complexText = new Kinetic.Text({
	x: 0,
	y: 0,
	text: '',
	fontSize: 18,
	fontFamily: 'Calibri',
	fill: '#555',
	padding: 20,
	align: 'center',
	visible: 'false'
});

var rect = new Kinetic.Rect({
	x: 0,
	y: 0,
	stroke: '#555',
	strokeWidth: 5,
	fill: '#ddd',
	shadowColor: 'black',
	shadowBlur: 10,
	shadowOffset: [10, 10],
	shadowOpacity: 0.2,
	cornerRadius: 10,
	visible: 'false'
});

var keyPoint = new Image();

	var mapLayer = new Kinetic.Layer();
	var pointsLayer = new Kinetic.Layer();
	var tooltipLayer = new Kinetic.Layer();
	
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
		perola.on('mouseenter', function(){
			showTooltip(perola,"Perola");
		});
		perola.on('mouseleave', function(){
			hideTooltip();
		});
		
		
		derecho.on('click touchstart', function() {
			window.location.href = "Panoramicas/Derecho.html";
		});
		derecho.on('mouseenter', function(){
			showTooltip(derecho,"Derecho");
		});
		derecho.on('mouseleave', function(){
			hideTooltip();
		});
		
		veterinaria.on('click touchstart', function() {
			window.location.href = "Panoramicas/Veterinaria.html";
		});
		veterinaria.on('mouseenter', function(){
			showTooltip(veterinaria,"Veterinaria");
		});
		veterinaria.on('mouseleave', function(){
			hideTooltip();
		});
		
		musica.on('click touchstart', function() {
			window.location.href = "Panoramicas/Musica.html";
		});
		musica.on('mouseenter', function(){
			showTooltip(musica,"Musica");
		});
		musica.on('mouseleave', function(){
			hideTooltip();
		});
		
		artes.on('click touchstart', function() {
			window.location.href = "Panoramicas/Artes.html";
		});
		artes.on('mouseenter', function(){
			showTooltip(artes,"Artes");
		});
		artes.on('mouseleave', function(){
			hideTooltip();
		});
		
		sindu.on('click touchstart', function() {
			window.location.href = "Panoramicas/Sindu.html";
		});
		sindu.on('mouseenter', function(){
			showTooltip(sindu,"Sindu");
		});
		sindu.on('mouseleave', function(){
			hideTooltip();
		});
		
		capilla.on('click touchstart', function() {
			window.location.href = "Panoramicas/Capilla.html";
		});
		capilla.on('mouseenter', function(){
			showTooltip(capilla,"Capilla");
		});
		capilla.on('mouseleave', function(){
			hideTooltip();
		});
		
		labIngeominas.on('click touchstart', function() {
			window.location.href = "Panoramicas/LabIngeominas.html";
		});
		labIngeominas.on('mouseenter', function(){
			showTooltip(labIngeominas,"Laboratorio Ingeominas");
		});
		labIngeominas.on('mouseleave', function(){
			hideTooltip();
		});
		
		patios.on('click touchstart', function() {
			window.location.href = "Panoramicas/Patios.html";
		});
		patios.on('mouseenter', function(){
			showTooltip(patios,"Patios");
		});
		patios.on('mouseleave', function(){
			hideTooltip();
		});
		
		astronomia.on('click touchstart', function() {
			window.location.href = "Panoramicas/Astronomia.html";
		});
		astronomia.on('mouseenter', function(){
			showTooltip(astronomia,"Astronomia");
		});
		astronomia.on('mouseleave', function(){
			hideTooltip();
		});
		
		paso26.on('click touchstart', function() {
			window.location.href = "Panoramicas/Paso26.html";
		});
		paso26.on('mouseenter', function(){
			showTooltip(paso26,"Pasillo Calle 26");
		});
		paso26.on('mouseleave', function(){
			hideTooltip();
		});
		
		paso45.on('click touchstart', function() {
			window.location.href = "Panoramicas/Paso45.html";
		});
		paso45.on('mouseenter', function(){
			showTooltip(paso45,"Entrada 45");
		});
		paso45.on('mouseleave', function(){
			hideTooltip();
		});
		
		aulas.on('click touchstart', function() {
			window.location.href = "Panoramicas/Aulas.html";
		});
		aulas.on('mouseenter', function(){
			showTooltip(aulas,"Aulas de Ingenieria");
		});
		aulas.on('mouseleave', function(){
			hideTooltip();
		});
		
		salmona.on('click touchstart', function() {
			window.location.href = "Panoramicas/Salmona.html";
		});
		salmona.on('mouseenter', function(){
			showTooltip(salmona,"Postgrados de Ciencias Humanas");
		});
		salmona.on('mouseleave', function(){
			hideTooltip();
		});
		
		cytAtras.on('click touchstart', function() {
			window.location.href = "Panoramicas/CytAtras.html";
		});
		cytAtras.on('mouseenter', function(){
			showTooltip(cytAtras,"Parque de los Maestros Abstractos");
		});
		cytAtras.on('mouseleave', function(){
			hideTooltip();
		});
		
		cytPlaza.on('click touchstart', function() {
			window.location.href = "Panoramicas/CytPlaza.html";
		});
		cytPlaza.on('mouseenter', function(){
			showTooltip(cytPlaza,"Plaza Edificio Ciencia y Tecnologia");
		});
		cytPlaza.on('mouseleave', function(){
			hideTooltip();
		});
		
		ciencias.on('click touchstart', function() {
			window.location.href = "Panoramicas/Ciencias.html";
		});
		ciencias.on('mouseenter', function(){
			showTooltip(ciencias,"Facultad de Ciencias");
		});
		ciencias.on('mouseleave', function(){
			hideTooltip();
		});
		
		zootecnia.on('click touchstart', function() {
			window.location.href = "Panoramicas/Zootecnia.html";
		});
		zootecnia.on('mouseenter', function(){
			showTooltip(zootecnia,"Zootecnia");
		});
		zootecnia.on('mouseleave', function(){
			hideTooltip();
		});
		
		plazaVet.on('click touchstart', function() {
			window.location.href = "Panoramicas/PlazaVet.html";
		});
		plazaVet.on('mouseenter', function(){
			showTooltip(plazaVet,"Plaza Veterinaria y Zootecnia");
		});
		plazaVet.on('mouseleave', function(){
			hideTooltip();
		});
		
		iei.on('click touchstart', function() {
			window.location.href = "Panoramicas/Iei.html";
		});
		iei.on('mouseenter', function(){
			showTooltip(iei,"Instituto de Extension e Investigacion");
		});
		iei.on('mouseleave', function(){
			hideTooltip();
		});
		
		plazaChe.on('click touchstart', function() {
			window.location.href = "Panoramicas/PlazaChe.html";
		});
		plazaChe.on('mouseenter', function(){
			showTooltip(plazaChe,"Plaza Che");
		});
		plazaChe.on('mouseleave', function(){
			hideTooltip();
		});
		
		ingenieria.on('click touchstart', function() {
			window.location.href = "Panoramicas/Ingenieria.html";
		});
		ingenieria.on('mouseenter', function(){
			showTooltip(ingenieria,"Edificio viejo de Ingenieria");
		});
		ingenieria.on('mouseleave', function(){
			hideTooltip();
		});
		
		cadeIng.on('click touchstart', function() {
			window.location.href = "Panoramicas/CadeIng.html";
		});
		cadeIng.on('mouseenter', function(){
			showTooltip(cadeIng,"Edificio viejo de Ingenieria");
		});
		cadeIng.on('mouseleave', function(){
			hideTooltip();
		});
		
		medicina.on('click touchstart', function() {
			window.location.href = "Panoramicas/Medicina.html";
		});
		medicina.on('mouseenter', function(){
			showTooltip(medicina,"Medicina");
		});
		medicina.on('mouseleave', function(){
			hideTooltip();
		});
		
		economia.on('click touchstart', function() {
			window.location.href = "Panoramicas/Economia.html";
		});
		economia.on('mouseenter', function(){
			showTooltip(economia,"Facultad de Economía");
		});
		economia.on('mouseleave', function(){
			hideTooltip();
		});
		
		salida26.on('click touchstart', function() {
			window.location.href = "Panoramicas/Salida26.html";
		});
		salida26.on('mouseenter', function(){
			showTooltip(salida26,"Entrada de la Calle 26");
		});
		salida26.on('mouseleave', function(){
			hideTooltip();
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
	
	tooltipLayer.add(rect).add(complexText);
	
	tooltipLayer.draw();
	
    stage.add(mapLayer);
	stage.add(pointsLayer);
	stage.add(tooltipLayer);
	
    map.src ="Imagenes/map.jpg";
	keyPoint.src = "res/dot.png";
	
function showTooltip(point,string){
	complexText.setText(string);
	var x = point.getX()-(complexText.getWidth()/2)+9;
	var y = point.getY()-60;
	complexText.setPosition(x,y);
	rect.setPosition(x,y);
	rect.setHeight(complexText.getHeight());
	rect.setWidth(complexText.getWidth());
	complexText.setVisible(true);
	rect.setVisible(true);
	
	tooltipLayer.draw();
}

function hideTooltip(){
	complexText.setVisible(false);
	rect.setVisible(false);
	tooltipLayer.draw();
}