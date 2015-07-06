var grid = $('#grid');
var GRIDWIDTH = 960;

// function that draws given response
function drawGrid(n) {
    var cellWidth = Math.floor(GRIDWIDTH / n) - 2;
    for (var i = 0; i < n * n; i++) {
        grid.append("<div class='cell'></div>");
    }
    $(".cell").css({height : cellWidth, width: cellWidth});

}

$(document).ready(function() {
    var response = +prompt("How many columns / rows do you want in your grid?");
    drawGrid(response);

    $('button').on('click', function() {
        response = +prompt("How many columns / rows do you want in your grid?");
        drawGrid(response);
    });
    $(".cell").on("mouseeenter", function() {
        $(this).addClass("highlight");
    });
    
    
});