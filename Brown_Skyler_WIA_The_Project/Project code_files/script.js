/**
 * Created by skylerbrown on 8/23/15.
 */

$("document").ready(function() {

    $("#slideshow").cycle();


    $(".modalClick").on('click', function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeIn()
            .find("#modal")
            .fadeIn();


    });


    /*Modal fade out*/

    $(".close").on("click", function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeOut()
            .find("#modal")
            .fadeOut();


    });


    if(Modernizr.canvas){



        $('#storeFront img').each(function() {

            createCanvas(this);
        });

        function createCanvas(image) {

            var canvas = document.createElement('canvas');
            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");

// specify canvas size
                canvas.width = image.width;
                canvas.height = image.height;


                ctx.drawImage(image, 0, 0);


                var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
                    pixelData = imageData.data;

// Loop through all the pixels in the imageData array, and modify
// the red, green, and blue color values.
                for (var y = 0; y < canvas.height; y++) {
                    for (var x = 0; x < canvas.width; x++) {


                        var i = (y * 4 * canvas.width) + (x * 4);

// Get the RGB values.
                        var red = pixelData[i];
                        var green = pixelData[i + 1];
                        var blue = pixelData[i + 2];

// Convert to grayscale. One of the formulas of conversion (e.g. you could try a simple average (red+green+blue)/3)
                        var grayScale = (red * 0.3) + (green * 0.59) + (blue * .11);

                        pixelData[i] = grayScale;
                        pixelData[i + 1] = grayScale;
                        pixelData[i + 2] = grayScale;
                    }
                }

// Putting the modified imageData back on the canvas.
                ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);

// Inserting the canvas in the DOM, before the image:
                image.parentNode.insertBefore(canvas, image);
            }



        else
            { alert("your browser does not support canvas")
        }
    }}




    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(44.052389, -123.106439),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }


    google.maps.event.addDomListener(window, 'load', initialize);





});

