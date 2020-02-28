$(document).ready(function() {
  let inputPoints = "";
  let action;
  $("#reset").click(() => {
    $("#player1 .lp").html(8000);
    $("#player2 .lp").html(8000);
    $("#pointInput").val("");
    inputPoints = "";
  });
  $("#clear").click(() => {
    $("#pointInput").val("");
    inputPoints = "";
  });
  $(".numButton").click(function() {
    if (inputPoints.length < 4) {
      inputPoints += $(this).html();
    }
    $("#pointInput").val(inputPoints);
  });
});
