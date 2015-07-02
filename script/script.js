$(document).ready(function() {
  var grid = $("#grid");
  var cellWidth = Math.floor($("#grid").width() / 16) - 2;
  for (var i = 0; i < 16 * 16; i++) {
    grid.append("<div class='cell'></div>");
  }
  $(".cell").css({"width": cellWidth, "height": cellWidth, "margin-top": "-2px"});
  
  $(".cell").on("mouseenter", function() {
    $(this).css("background-color", "red");
  });
});