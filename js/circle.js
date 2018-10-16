circles = []
function onKeyDown(event){
			maxPoint = new Point(view.size.width, view.size.height);
			//console.log(maxPoint)
			randomPoint = Point.random();
			centre = (randomPoint)*maxPoint;
			//console.log(randomPoint, maxPoint, centre)
			newCircle = new Path.Circle(centre, 500);
			newCircle.fillColor = "skyblue";

			circles.push(newCircle);
			
		}

function onFrame(event){

	circles.forEach(function(circle, index){
		circle.fillColor.hue += 1;
		circle.scale(.9);
	});
}