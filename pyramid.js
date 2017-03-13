document.getElementById("height_slide").oninput = function() {myFunction()};

function myFunction() {
    //get height value and convert to int
    heightStr = document.getElementById("height_slide").value;
    height = parseInt(heightStr);

    //get the symbol to use as bricks
    document.getElementById("brick").onchange = function() {getBrick()};

    function getBrick(){
        brick_type = document.getElementById("brick").value;
    }

    drawPyramid(height, brick_type);
}

/*
height = document.getElementById("height_slide").value;
height = parseInt(height);

brick_type = document.getElementById("brick").value;

document.getElementById("height_slide").oninput = function() {changeHeight()};
function changeHeight() {
    drawPyramid(height, brick_type);
}

document.getElementById("brick").onchange = function() {changeBrick()};
function changeBrick() {
    drawPyramid(height, brick_type);
}
*/

function drawPyramid(height, brick_type) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick_type;
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("p");
       rowElem.appendChild(textElem);

       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
   }
}
