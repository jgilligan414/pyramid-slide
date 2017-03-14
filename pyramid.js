document.getElementById("height_slide").oninput = function() {changeHeight()};
function changeHeight() {
    //clear number value area
    document.getElementById("height_val").innerHTML = "";

    //get height and convert to int
    height = document.getElementById("height_slide").value;
    py_height = parseInt(height);

    //show height value
    // var h = document.createElement("p");
    // h.innerHTML = py_height;
    document.getElementById("height_val").innerHTML = py_height;

    //get brick character
    brick_type = document.getElementById("brick").value;

    drawPyramid(py_height, brick_type);
}

document.getElementById("brick").onchange = function() {changeBrick()};
function changeBrick() {
    //get height and convert to int
    height = document.getElementById("height_slide").value;
    py_height = parseInt(height);

    //get brick character
    brick_type = document.getElementById("brick").value;

    drawPyramid(py_height, brick_type);
}


function drawPyramid(height, brick_type) {

    // clear previous content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaces = "&nbsp";
            rowStr += spaces;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick_type;
        }
        // make a <p> element for this row, and insert it into the #pyramid container
        var rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
