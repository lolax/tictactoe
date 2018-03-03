document.addEventListener("DOMContentLoaded", function(event) {

  let user_weap = "";
  let comp_weap = "";
  const hideChooseWeap = () => choose_weap.classList.add("hidden");
  const showScoreboard = () => scoreboard.classList.remove("hidden");

  document.getElementById("weap_x").addEventListener('click', function() {
    if (user_weap === "") {
      user_weap = "X";
      comp_weap = "O"
      hideChooseWeap();
      showScoreboard();
      startRound();
    }
  });
  document.getElementById("weap_o").addEventListener('click', function() {
    if (user_weap === "") {
      user_weap = "O";
      comp_weap = "X";
      hideChooseWeap();
      showScoreboard();
      startRound();
    }
  });

  let p1 = "";
  let p2 = "";

  let board = [["A1", "A2", "A3"], ["B1", "B2", "B3"], ["C1", "C2", "C3"]];
  let flatBoard = [].concat(...board);

  function startRound() {
    let roundCount = 0;
    if (roundCount % 2 === 0) { p1 = "user"; p2 = "comp"; }
    if (roundCount % 2 === 1) { p1 = "comp"; p2 = "user"; }
    firstTurn();
  }

  let compTurn = false;

  function firstTurn() {
    p1 === "user" ? compTurn = false : compTurn = true;
  }

  let msg = document.getElementById("msg")

  compTurn ? msg.innerText = "computer's turn!" : msg.innerText  = "your turn!";

  for (square of flatBoard) {
    let squareDiv = document.getElementById(square);
    squareDiv.addEventListener('click', function(){
      if (squareDiv.classList.contains("unocc") && !compTurn) {
        squareDiv.innerText = user_weap;
        squareDiv.classList.remove("unocc");
      }
    });
  }

  // function compTurn() {
  //   let moveCount = 0;
  //   for (square of flatBoard) {
  //     let squareDiv = document.getElementById(square);
  //     squareDiv.addEventListener('click', function(){
  //       if (squareDiv.classList.contains("unocc") && moveCount === 0) {
  //         squareDiv.innerText = comp_weap;
  //         squareDiv.classList.remove("unocc");
  //         moveCount += 1;
  //         userTurn();
  //       }
  //     });
  //   }
  // }
});
