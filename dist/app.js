$(document).ready(function() {
  let inputPoints = "";
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
  $("#one").click(() => {
    if (inputPoints.length < 4) {
      if ($("#pointInput").val() === "") {
        inputPoints = "1";
      } else {
        inputPoints += "1";
      }
      $("#pointInput").val(inputPoints);
    }
  });
  $("#two").click(() => {
    if (inputPoints.length < 4) {
      if ($("#pointInput").val() === "") {
        inputPoints = "2";
      } else {
        inputPoints += "2";
      }
      $("#pointInput").val(inputPoints);
    }
  });
  $("#three").click(() => {
    if (inputPoints.length < 4) {
      if ($("#pointInput").val() === "") {
        inputPoints = "3";
      } else {
        inputPoints += "3";
      }
      $("#pointInput").val(inputPoints);
    }
  });
});
