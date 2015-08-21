/**
 * Created by skylerbrown on 8/17/15.
 */

// No window onload function needed. It is built into paper.js and will cause an error and will not load.

//Changes the ammount of objects on screen being created at a time

var count = 150;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Rectangle({
    size:[5,5],
    fillColor: 'white',
    strokeColor: 'black'
});

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
    // The center position is a random point in the view:
    var center = Point.random() * view.size;
    var placedSymbol = symbol.place(center);
    placedSymbol.scale(i / count);
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {

    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];

        // item.bounds.width changes the time of the animation

        item.position.x += item.bounds.width / .5;


        //sets the bounds and resets the animation based on the direction of the animation.

        if (item.bounds.left > view.size.width) {
            item.position.x = -item.bounds.width;
        }
    }
}
