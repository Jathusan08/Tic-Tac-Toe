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

  const checkWin = (grid, participant) => {
    switch (grid) {
      case 0:
        if (
          ticTacToeBoard[0] === participant &&
          ticTacToeBoard[1] === participant &&
          ticTacToeBoard[2] === participant
        ) {
        } else if (
          ticTacToeBoard[0] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[8] === participant
        ) {
        } else if (
          ticTacToeBoard[0] === participant &&
          ticTacToeBoard[3] === participant &&
          ticTacToeBoard[6] === participant
        ) {
        }

        break;

      case 1:
        if (
          ticTacToeBoard[1] === participant &&
          ticTacToeBoard[0] === participant &&
          ticTacToeBoard[2] === participan
        ) {
        } else if (
          ticTacToeBoard[1] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[7] === participant
        ) {
        }

        break;

      case 2:
        if (
          ticTacToeBoard[2] === participant &&
          ticTacToeBoard[1] === participant &&
          ticTacToeBoard[0] === participant
        ) {
        } else if (
          ticTacToeBoard[2] === participant &&
          ticTacToeBoard[5] === participant &&
          ticTacToeBoard[8] === participant
        ) {
        } else if (
          ticTacToeBoard[2] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[6] === participant
        ) {
        }

        break;

      case 3:
        if (
          ticTacToeBoard[3] === participant &&
          ticTacToeBoard[0] === participant &&
          ticTacToeBoard[6] === participant
        ) {
        } else if (
          ticTacToeBoard[3] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[5] === participant
        ) {
        }

        break;

      case 4:
        if (
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[1] === participant &&
          ticTacToeBoard[7] === participant
        ) {
        } else if (
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[3] === participant &&
          ticTacToeBoard[5] === participant
        ) {
        } else if (
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[0] === participant &&
          ticTacToeBoard[8] === participant
        ) {
        } else if (
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[2] === participant &&
          ticTacToeBoard[6] === participant
        ) {
        }

        break;

      case 5:
        if (
          ticTacToeBoard[5] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[3] === participant
        ) {
        } else if (
          ticTacToeBoard[5] === participant &&
          ticTacToeBoard[2] === participant &&
          ticTacToeBoard[8] === participant
        ) {
        }

        break;

      case 6:
        if (
          ticTacToeBoard[6] === participant &&
          ticTacToeBoard[7] === participant &&
          ticTacToeBoard[8] === participant
        ) {
        } else if (
          ticTacToeBoard[6] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[2] === participant
        ) {
        } else if (
          ticTacToeBoard[6] === participant &&
          ticTacToeBoard[3] === participant &&
          ticTacToeBoard[0] === participant
        ) {
        }

        break;

      case 7:
        if (
          ticTacToeBoard[7] === participant &&
          ticTacToeBoard[6] === participant &&
          ticTacToeBoard[8] === participant
        ) {
        } else if (
          ticTacToeBoard[7] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[1] === participant
        ) {
        }

        break;

      case 8:
        if (
          ticTacToeBoard[8] === participant &&
          ticTacToeBoard[7] === participant &&
          ticTacToeBoard[6] === participant
        ) {
        } else if (
          ticTacToeBoard[8] === participant &&
          ticTacToeBoard[5] === participant &&
          ticTacToeBoard[2] === participant
        ) {
        } else if (
          ticTacToeBoard[8] === participant &&
          ticTacToeBoard[4] === participant &&
          ticTacToeBoard[0] === participant
        ) {
        }

        break;

      default:
        break;
    }
  };
  const showTicTacToeBoard = () => {
    console.log(ticTacToeBoard);
  };

  const updateBoard = (grid, participant) => {
    if (
      Number(grid) >= 0 &&
      Number(grid) < ticTacToeBoard.length &&
      (participant === "X" || participant === "O")
    ) {
      if (ticTacToeBoard[grid] === "") {
        ticTacToeBoard[grid] = participant;
      }
    }
  };
  return { isTicTaeBoardFilled, resetTicTacBoard, updateBoard };
})();

const displayController = (() => {
  const playerName = document.querySelector(".playerName"); // playerName
  const playerChoice = document.querySelector(".player-choice"); // PlayerChoice
  const playerWinScore = document.querySelector(".playerScore > span");

  const computerName = document.querySelector(".computer-section > div"); // Comptuer name
  const computerChoice = document.querySelector(".computer-choice"); // Comptuer Choice
  const computerWinScore = document.querySelector(".computerScore > span");

  const gameState = document.querySelector(".gameState"); // message on who turn

  const restartBtn = document.querySelector(".restart-btn"); // restart button
  const submitbtn = document.querySelector(".submit-button");

  const allGrids = document.querySelectorAll(".ticTacToe > div"); // grid

  const numRoundDiv = document.querySelector(".num-round");
  const abbreavationNumber = numRoundDiv.querySelector(".num-round span");

  const modalElement = document.querySelector(".modal");
  const nameInput = document.getElementById("name");
  const nameInputError = document.querySelector(".name > .error");

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

  const clearGrid = () => {
    allGrids.forEach((grid) => {
      grid.textContent = "";
      grid.setAttribute("style", "background: f34954;");
    });
  };

  nameInput.addEventListener("input", () => {
    formValidator.userInputTextValidation(
      nameInput,
      nameInputError,
      "Name required"
    );
  });

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
    } else {
      return false;
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
      console.log(player.getName(), player.getSymbol());
      console.log(computer.getName(), computer.getSymbol());
    }
  });

  restartBtn.addEventListener("click", (event) => {
    player = null;
    computer = null;
    playerName.textContent = "";
    playerChoice.textContent = "";
    playerWinScore.textContent = "";
    computerChoice.textContent = "";
    computerWinScore.textContent = "";

    //     // abbreavationNumber.textContent = "nd";
    //     // //numRoundDiv.textContent = "2";

    gameState.textContent = "";
    clearGrid();
    modal.open();
  });

  return { openModal, closeModal, resetModal };
})();

const startTicTacToeGame = (() => {
  // let player = null;
  // let computer = null;

  modal.open();
})();
