function createParticipant(name, symbol) {
  // in our case the there are 2 participants which are player and computer
  let score = 0;
  const increaseScore = () => (score += 1);
  const resetScore = () => (score = 0);
  const getName = () => name;
  const getSymbol = () => symbol;
  const getScore = () => score;

  return {
    increaseScore,
    resetScore,
    getName,
    getSymbol,
    getScore,
  };
}

const modal = (() => {
  const open = () => {
    displayController.openModal();
  };

  const close = () => {
    displayController.closeModal();
  };

  const clearValues = () => {
    displayController.resetModal();
  };

  return { open, close, clearValues };
})();

const formValidator = (() => {
  const userInputTextValidation = (inputType, errorLabel, errorMessage) => {
    if (inputType.value === "" || inputType.value.trim() === "") {
      errorLabel.textContent = errorMessage;
      errorLabel.style.color = "red";
      return false;
    } else {
      errorLabel.textContent = "✓";
      errorLabel.style.color = "green";
      return true;
    }
  };

  return { userInputTextValidation };
})();

const gameboard = (() => {
  //   ///////            0   1   2   3   4   5   6   7   8
  const ticTacToeBoard = ["", "", "", "", "", "", "", "", ""];

  const resetTicTacBoard = () => {
    for (let i = 0; i < ticTacToeBoard.length; i++) {
      ticTacToeBoard[i] = "";
    }
  };

  const isTicTaeBoardFilled = () => {
    for (let i = 0; i < ticTacToeBoard.length; i++) {
      if (ticTacToeBoard[i] !== "X" && ticTacToeBoard[i] !== "O") {
        return false; // If any element is not 'X' or 'O', return false
      }
    }
    return true; // If all elements are 'X' or 'O', return true
  };

  const checkWinningPattern = (grids, participant) => {
    const array = grids;
    const allTrue = array.every((grid) => grid === participant);
    return allTrue;
  };

  const checkWin = (grid, participant) => {
    let winningPattern = [];
    switch (Number(grid)) {
      case 0:
        if (
          checkWinningPattern(
            [ticTacToeBoard[0], ticTacToeBoard[1], ticTacToeBoard[2]],
            participant
          )
        ) {
          winningPattern.push(0, 1, 2);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[0], ticTacToeBoard[4], ticTacToeBoard[8]],
            participant
          )
        ) {
          winningPattern.push(0, 4, 8);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[0], ticTacToeBoard[3], ticTacToeBoard[6]],
            participant
          )
        ) {
          winningPattern.push(0, 3, 6);
        }

        break;

      case 1:
        if (
          checkWinningPattern(
            [ticTacToeBoard[1], ticTacToeBoard[0], ticTacToeBoard[2]],
            participant
          )
        ) {
          winningPattern.push(1, 0, 2);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[1], ticTacToeBoard[4], ticTacToeBoard[7]],
            participant
          )
        ) {
          winningPattern.push(1, 4, 7);
        }

        break;

      case 2:
        if (
          checkWinningPattern(
            [ticTacToeBoard[2], ticTacToeBoard[1], ticTacToeBoard[0]],
            participant
          )
        ) {
          winningPattern.push(2, 1, 0);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[2], ticTacToeBoard[5], ticTacToeBoard[8]],
            participant
          )
        ) {
          winningPattern.push(2, 5, 8);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[2], ticTacToeBoard[4], ticTacToeBoard[6]],
            participant
          )
        ) {
          winningPattern.push(2, 4, 6);
        }

        break;

      case 3:
        if (
          checkWinningPattern(
            [ticTacToeBoard[3], ticTacToeBoard[0], ticTacToeBoard[6]],
            participant
          )
        ) {
          winningPattern.push(3, 0, 6);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[3], ticTacToeBoard[4], ticTacToeBoard[5]],
            participant
          )
        ) {
          winningPattern.push(3, 4, 5);
        }

        break;

      case 4:
        if (
          checkWinningPattern(
            [ticTacToeBoard[4], ticTacToeBoard[1], ticTacToeBoard[7]],
            participant
          )
        ) {
          winningPattern.push(4, 1, 7);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[4], ticTacToeBoard[3], ticTacToeBoard[5]],
            participant
          )
        ) {
          winningPattern.push(4, 3, 5);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[4], ticTacToeBoard[0], ticTacToeBoard[8]],
            participant
          )
        ) {
          winningPattern.push(4, 0, 8);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[4], ticTacToeBoard[2], ticTacToeBoard[6]],
            participant
          )
        ) {
          winningPattern.push(4, 2, 6);
        }

        break;

      case 5:
        if (
          checkWinningPattern(
            [ticTacToeBoard[5], ticTacToeBoard[4], ticTacToeBoard[3]],
            participant
          )
        ) {
          winningPattern.push(5, 4, 3);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[5], ticTacToeBoard[2], ticTacToeBoard[8]],
            participant
          )
        ) {
          winningPattern.push(5, 2, 8);
        }

        break;

      case 6:
        if (
          checkWinningPattern(
            [ticTacToeBoard[6], ticTacToeBoard[7], ticTacToeBoard[8]],
            participant
          )
        ) {
          winningPattern.push(6, 7, 8);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[6], ticTacToeBoard[4], ticTacToeBoard[2]],
            participant
          )
        ) {
          winningPattern.push(6, 4, 2);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[6], ticTacToeBoard[3], ticTacToeBoard[0]],
            participant
          )
        ) {
          winningPattern.push(6, 3, 0);
        }

        break;

      case 7:
        if (
          checkWinningPattern(
            [ticTacToeBoard[7], ticTacToeBoard[6], ticTacToeBoard[8]],
            participant
          )
        ) {
          winningPattern.push(7, 6, 8);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[7], ticTacToeBoard[4], ticTacToeBoard[1]],
            participant
          )
        ) {
          winningPattern.push(7, 4, 1);
        }

        break;

      case 8:
        if (
          checkWinningPattern(
            [ticTacToeBoard[8], ticTacToeBoard[7], ticTacToeBoard[6]],
            participant
          )
        ) {
          winningPattern.push(8, 7, 6);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[8], ticTacToeBoard[5], ticTacToeBoard[2]],
            participant
          )
        ) {
          winningPattern.push(8, 5, 2);
        } else if (
          checkWinningPattern(
            [ticTacToeBoard[8], ticTacToeBoard[4], ticTacToeBoard[0]],
            participant
          )
        ) {
          winningPattern.push(8, 4, 0);
        }

        break;

      default:
        break;
    }
    return winningPattern;
  };
  const showTicTacToeBoard = () => {
    console.log(ticTacToeBoard);
  };

  const updateBoard = (grid, participant) => {
    let winningCheck = [];
    if (
      Number(grid) >= 0 &&
      Number(grid) < ticTacToeBoard.length &&
      (participant === "X" || participant === "O")
    ) {
      if (ticTacToeBoard[grid] === "") {
        ticTacToeBoard[grid] = participant;
        winningCheck = checkWin(grid, participant);
      }
    }
    return winningCheck;
  };
  return {
    isTicTaeBoardFilled,
    resetTicTacBoard,
    updateBoard,
    showTicTacToeBoard,
  };
})();

const displayController = (() => {
  const playerName = document.querySelector(".playerName"); // playerName
  const playerChoice = document.querySelector(".player-choice"); // PlayerChoice
  const playerWinScore = document.querySelector(".playerScore > span");

  const computerChoice = document.querySelector(".computer-choice"); // Comptuer Choice
  const computerWinScore = document.querySelector(".computerScore > span");

  const gameState = document.querySelector(".gameState"); // message on who turn

  const restartBtn = document.querySelector(".restart-btn"); // restart button
  const submitbtn = document.querySelector(".submit-button");
  const nextRoundBtn = document.querySelector(".nextRound-btn");

  const allGrids = document.querySelectorAll(".ticTacToe > div"); // grid

  const numRoundDiv = document.querySelector(".num-round");

  const modalElement = document.querySelector(".modal");
  const nameInput = document.getElementById("name");
  const nameInputError = document.querySelector(".name > .error");

  const TicTacToeGrid = document.querySelector(".ticTacToe");

  let playerTurn = true; // at the start of the game player will go first

  let player = null;
  let computer = null;

  const openModal = () => {
    modalElement.showModal();
  };

  const closeModal = () => {
    modalElement.close();
  };

  const resetModal = () => {
    nameInput.value = "";
    nameInputError.textContent = "";
    document.getElementById("X").checked = true;
  };

  const highlightWinningCells = (cells) => {
    for (let i = 0; i < cells.length; i++) {
      allGrids[cells[i]].setAttribute("style", "background: #F9D459;");
    }
  };

  const clearGrid = () => {
    allGrids.forEach((grid) => {
      grid.textContent = "";
      grid.setAttribute("style", "background: f34954;");
    });
  };

  const handleFormSubmission = () => {
    const selectedRadioButton = document.querySelector(
      'input[name="option"]:checked'
    );

    if (
      formValidator.userInputTextValidation(
        nameInput,
        nameInputError,
        "Name required"
      )
    ) {
      playerName.textContent = nameInput.value;
      playerChoice.textContent = selectedRadioButton.value;
      computerChoice.textContent =
        selectedRadioButton.value === "X" ? "O" : "X";
      gameState.textContent = "Player Turn";
      modal.close();
      modal.clearValues();
      return true;
    }
  };

  const computerMove = () => {
    let emptyGrid = [];
    let randomChoice;

    if (!gameboard.isTicTaeBoardFilled()) {
      // get all the empty grids
      for (let i = 0; i < allGrids.length; i++) {
        if (allGrids[i].textContent === "") {
          emptyGrid.push(Number(allGrids[i].getAttribute("data-box")));
        }
      }
      randomChoice = Math.floor(Math.random() * (emptyGrid.length - 1)) + 0;
      allGrids[emptyGrid[randomChoice]].textContent = computer.getSymbol();
      let checkWin = gameboard.updateBoard(
        emptyGrid[randomChoice],
        computer.getSymbol()
      );
      if (checkWin.length != 0) {
        highlightWinningCells(checkWin);
        computer.increaseScore();
        computerWinScore.textContent = computer.getScore();
        gameState.textContent = "Computer Won";
        nextRoundBtn.style.display = "block";
      } else if (gameboard.isTicTaeBoardFilled()) {
        gameState.textContent = "Draw Match";
        nextRoundBtn.style.display = "block";
        playerTurn = true;
      } else {
        gameState.textContent = "Player Turn";
        TicTacToeGrid.addEventListener("click", playerMove);
      }
    }
  };
  const playerMove = (event) => {
    let grid = event.target;
    console.log(grid);
    if (!gameboard.isTicTaeBoardFilled()) {
      if (grid.textContent === "") {
        grid.textContent = player.getSymbol();
        let checkWin = gameboard.updateBoard(
          Number(grid.getAttribute("data-box")),
          player.getSymbol()
        );
        if (checkWin.length != 0) {
          highlightWinningCells(checkWin);
          player.increaseScore();
          playerWinScore.textContent = player.getScore();
          gameState.textContent = "Player Won";
          TicTacToeGrid.removeEventListener("click", playerMove);
          nextRoundBtn.style.display = "block";
        } else if (gameboard.isTicTaeBoardFilled()) {
          gameState.textContent = "Draw Match";
          nextRoundBtn.style.display = "block";
          playerTurn = false;
        } else {
          TicTacToeGrid.removeEventListener("click", playerMove);
          gameState.textContent = "Computer Turn";
          setTimeout(function () {
            computerMove();
          }, 1000);
        }
      }
    }
  };

  submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (handleFormSubmission()) {
      player = createParticipant(
        playerName.textContent,
        playerChoice.textContent
      );
      computer = createParticipant("Computer", computerChoice.textContent);
    }
  });

  restartBtn.addEventListener("click", (event) => {
    gameboard.resetTicTacBoard();
    nextRoundBtn.style.display = "none";
    TicTacToeGrid.addEventListener("click", playerMove);
    player = null;
    computer = null;

    playerName.textContent = "";
    playerChoice.textContent = "";
    playerWinScore.textContent = "";
    computerChoice.textContent = "";
    computerWinScore.textContent = "";

    numRoundDiv.textContent = "1";
    let spanElement = document.createElement("span");
    spanElement.textContent = "st";
    numRoundDiv.appendChild(spanElement);
    gameState.textContent = "";
    clearGrid();
    modal.open();
  });

  nameInput.addEventListener("input", () => {
    formValidator.userInputTextValidation(
      nameInput,
      nameInputError,
      "Name required"
    );
  });

  TicTacToeGrid.addEventListener("click", playerMove);

  nextRoundBtn.addEventListener("click", () => {
    let currentRoundNumber = parseInt(numRoundDiv.textContent);

    let nextRoundNumber = currentRoundNumber + 1;

    numRoundDiv.textContent = nextRoundNumber;

    let spanElement = document.createElement("span");
    if (nextRoundNumber === 2) {
      spanElement.textContent = "nd";
    } else if (nextRoundNumber === 3) {
      spanElement.textContent = "rd";
    } else if (nextRoundNumber > 3) {
      spanElement.textContent = "th";
    }

    numRoundDiv.appendChild(spanElement);
    clearGrid();
    gameboard.resetTicTacBoard();
    nextRoundBtn.style.display = "none";

    if (gameState.textContent === "Player Won") {
      gameState.textContent = "Computer Turn";
      setTimeout(function () {
        computerMove();
      }, 1000);
    } else if (gameState.textContent === "Computer Won") {
      gameState.textContent = "Player Turn";
      TicTacToeGrid.addEventListener("click", playerMove);
    } else if (gameState.textContent === "Draw Match") {
      if (!playerTurn) {
        TicTacToeGrid.removeEventListener("click", playerMove);
        gameState.textContent = "Computer Turn";
        setTimeout(function () {
          computerMove();
        }, 1000);
      } else {
        gameState.textContent = "Player Turn";
        TicTacToeGrid.addEventListener("click", playerMove);
      }
    }
  });

  return { openModal, closeModal, resetModal };
})();

const startTicTacToeGame = (() => {
  modal.open();
})();
