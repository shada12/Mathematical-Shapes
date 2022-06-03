
// Function to find the length of the
// diagonal of a square of a given side
// diagonal(d) of a square where the side is(s):
// d = s√2

function findDiagonal() {

     var side = parseInt(document.getElementById("side").value);

     var diagonal = Math.sqrt(2) * side;

     document.getElementById("displayDiagonal").innerHTML = diagonal.toFixed(6);
   /* return Math.sqrt(2) * side;*/
}

/*
document.write("The diagonal of square = " + findDiagonal(9).toFixed(6) + "<br>");
*/


//Find  Triangle Area
//Area = sqrt(s*(s-a)*(s-b)*(s-c))
//where a, b and c are lengths of sides of
//triangle and s = (a+b+c)/2

function triangleArea() {

    var side1 = parseInt(document.getElementById("side1").value);

    var side2 = parseInt(document.getElementById("side2").value);

    var side3 = parseInt(document.getElementById("side3").value);

    // Length of sides must be positive and sum of any two sides must be smaller than third side.
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 ||
        (side1 + side2 <= side3) || (side1 + side3 <= side2) ||
        (side2 + side3 <= side1)) {
        document.write("This is not valid triangle");
    }
    else {

        var s = (side1 + side2 + side3) / 2;

        var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

       /* return area;*/
       document.getElementById("displayArea").innerHTML = area.toFixed(6);
    }
}

/*document.write("The area of triangle = " + triangleArea(5, 6, 7).toFixed(6));
document.write("<br>");
*/

const PI = 3.14159265358979323846;

// function to calculate the circumference of circle
function circumference() {

    var radius = parseInt(document.getElementById("radius1").value);

    let circumference = 2 * PI * radius;

    document.getElementById("displayCircumference").innerHTML = circumference.toFixed(6);
    /*return circumference;*/
}

/*document.write("The circumference = " + circumference(4).toFixed(6) + "<br>");*/


// function to calculate the area of circle
function circleArea() {

    var radius = parseInt(document.getElementById("radius2").value);

    let circleArea = PI * Math.pow(radius, 2);

    document.getElementById("displaySurfaceArea").innerHTML = circleArea.toFixed(6);
  /*  return area;*/
}

/*document.write("The area of circle = " + circleArea(4).toFixed(6));*/
