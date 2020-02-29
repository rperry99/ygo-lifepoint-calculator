$(document).ready(function() {
  let inputPoints = "";
  let action;
  let player1Lp = 8000;
  let player2Lp = 8000;

  resetValues();

  $("#reset").click(() => {
    player1Lp = 8000;
    player2Lp = 8000;
    resetValues();
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

  $(".minus").click(function() {
    let player = $(this).attr("id");
    if (inputPoints !== "") {
      if (player === "p1Minus") {
        player1Lp -= parseInt(inputPoints);
      } else if (player === "p2Minus") {
        player2Lp -= parseInt(inputPoints);
      }
    }
    resetValues();
  });

  $(".plus").click(function() {
    let player = $(this).attr("id");
    if (inputPoints !== "") {
      if (player === "p1Plus") {
        player1Lp += parseInt(inputPoints);
      } else if (player === "p2Plus") {
        player2Lp += parseInt(inputPoints);
      }
    }
    resetValues();
  });

  function resetValues() {
    $("#player1 .lp").html(player1Lp);
    $("#player2 .lp").html(player2Lp);
    $("#pointInput").val("");
    inputPoints = "";
  }
});
