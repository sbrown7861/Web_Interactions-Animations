/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/


window.onload = function() {

    var Canvas1 = document.getElementById("Canvas1");

    if (Canvas1) {

        var ctx1 = Canvas1.getContext("2d");

        if (ctx1) {

            ctx1.strokeStyle = "black";

            ctx1.lineWidth = 3;


            ctx1.strokeRect(0, 0, 50, 100);


            ctx1.fillStyle = "lightblue";

            ctx1.fillRect(0, 0, 50, 100)

        }

    }


//Draw Rectangle here


    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


    var Canvas2 = document.getElementById("Canvas2");

    if(Canvas2){

        var ctx2 = Canvas2.getContext("2d");

        if(ctx2){

            ctx2.strokeStyle = "black";
           // ctx2.stroke("30");

            //I do not understand why we have two different strokes but only 1 circle.

            //Instructions (line 71-74) were draw A circle...not two circles. Please explain. Thank you



            var r_a = 0.5;
            ctx2.fillStyle = "rgba(215, 56, 56, " + r_a + ")";

            ctx2.lineWidth = 3;



            ctx2.beginPath();


            ctx2.arc(50,50,20 , 0 , 2*Math.PI);


            ctx2.fill();
            ctx2.stroke();


        }

    }




//Draw Circle here


    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


    var Canvas3 = document.getElementById("Canvas3");

    if (Canvas3) {

        var ctx3 = Canvas3.getContext("2d");

        if (ctx3) {

            ctx3.strokeStyle = "black";

            ctx3.lineWidth = 3;


            ctx3.beginPath();
            ctx3.moveTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();
            ctx3.lineTo();

        //Hard coding is NOT a best practice I should create a function.

            //ctx3.closePath();
            ctx3.stroke();


        }

    }




//Draw Star here


    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

//Draw Umbrella top here

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

//Draw text here

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here


}