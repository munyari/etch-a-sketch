var grid = $('#grid');
var GRIDWIDTH = 960;

// function that draws given response
function drawGrid(n) {
    var cellWidth = Math.floor(GRIDWIDTH / n) - 2;
    for (var j = 0; j < n; j++) {
        for (var i = 0; i < n; i++) {
            grid.append("<div class='cell'></div>");
        }
        grid.append($("<div></div>").css("clear", "both").height("1 px"));
    }
    $(".cell").css({height : cellWidth, width: cellWidth});

}

$(document).ready(function() {
    var response = +prompt("How many columns / rows do you want in your grid?");
    drawGrid(response);
    $('.cell').on('mouseenter', function() {
        $(this).addClass('highlight');
    });
    $('button').on('click', function() {
        response = +prompt("How many columns / rows do you want in your grid?");
        drawGrid(response);
    });
});