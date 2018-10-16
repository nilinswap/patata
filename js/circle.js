
for( var x = 0; x < 10; x++){
	for( var y = 0; y < 10; y++){
		var cir = new Path.Circle(new Point(x*50, y*50), 25);
		cir.fillColor = "red";
	}
}