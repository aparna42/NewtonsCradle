
class rope {
	//Here, body1 will be the bob and body2 will be the roof
	constructor(body1, body2, pointA, pointB) {
		this.pointA = pointA
		this.pointB = pointB

		var options = {
			bodyA: body1,
			bodyB: body2,
			//This value is how far away the rope constraint should be connected from the 
			//centre of the roof object's body
			pointB: { x: this.pointA, y: this.pointB }
		}
		this.rope = Constraint.create(options)
		World.add(world, this.rope)
	}

	display() {
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		//displaying the rope between the 2 bodies by accessing their positions
		line(pointA.x, pointA.y, pointB.x + this.pointA, pointB.y + this.pointB);
	}

}