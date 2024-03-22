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
