val_c1 = 1;
val_c2 = 1;
val_c3 = 1;
val_c4 = 1;
val_c5 = 1;
val_c6 = 1;
val_c7 = 1;
turn = 1;

//checking the winner
function check(player) {
  setTimeout(() => {
    // vertical
    for (i = 1; i <= 3; i++) {
      for (j = 1; j <= 4; j++) {
        if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}`) {
          alert(`${player} wins`);
          location.reload();
        }
      }
    }

    // horizontal
    for (i = 1; i <= 1; i++) {
      for (j = 1; j <= 6; j++) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ==
            `${player}` &&
          document.getElementById(`c${i + 1}r${j}`).style.backgroundColor ==
            `${player}` &&
          document.getElementById(`c${i + 2}r${j}`).style.backgroundColor ==
            `${player}`
        ) {
          alert(`${player} wins`);
          location.reload();
        }
      }
    }

    // bottom left to top right
    for (i = 1; i <= 1; i++) {
      for (j = 1; j <= 4; j++) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ==
            `${player}` &&
          document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor ==
            `${player}` &&
          document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor ==
            `${player}`
        ) {
          alert(`${player} wins`);
          location.reload();
        }
      }
    }

    // top left to bottom right
    for (i = 1; i <= 1; i++) {
      for (j = 3; j <= 6; j++) {
        if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}`) {
          alert(`${player} wins`);
          location.reload();
        }
      }
    }
  }, 200);
}

//playing
document.querySelectorAll(".column").forEach((e) => {
  e.addEventListener("click", () => {
    sum = eval(`val_${e.id}`);
    eval(`val_${e.id}++`);

    if (sum <= 6 && turn % 2 != 0) {
      document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red";
      document.getElementById(`${e.id}r${sum}`).classList.add(`fall`);
      turn++;
      check("red");
      document.getElementById("whosturn").innerText = "Yellow Player's Turn";
    }
    else if (sum <= 6 && turn % 2 == 0) {
      document.getElementById(`${e.id}r${sum}`).style.backgroundColor =
        "yellow";
      document.getElementById(`${e.id}r${sum}`).classList.add(`fall`);
      turn++;
      check("yellow");
      document.getElementById("whosturn").innerText = "Red Player's Turn";
    }
    else {
      document.getElementById("whosturn").innerText =
        "Draw! Refresh page to play again.";
    }
  });
});