// scripts.js

function getTriangleArea(a, h) {
	if (a < 0) {
		console.log('Incorrect data');
	} else if (h < 0) {
  		console.log('Incorrect data');
	} else {
  	return a*h/2;
	}
}
console.log(getTriangleArea(8, 2));

var triangle1Area = getTriangleArea(10, 3);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(-5, 3);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(23, 4);
console.log(triangle3Area);
