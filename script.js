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
  const modal = document.querySelector(".modal");
  const nameInput = document.getElementById("name");
  const nameInputError = document.querySelector(".name > .error");

  const open = () => {
    modal.showModal();
  };

  const close = () => {
    modal.close();
  };

  const clearValues = () => {
    nameInput.value = "";
    nameInputError.textContent = "";
    document.getElementById("X").checked = true;
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

(function startTicTacToeGame() {
  const submitbtn = document.querySelector(".submit-button");
  const nameInput = document.getElementById("name");
  const nameInputError = document.querySelector(".name > .error");

  let player = null;
  let computer = null;

  modal.open();

  nameInput.addEventListener("input", () => {
    formValidator.userInputTextValidation(
      nameInput,
      nameInputError,
      "Name required"
    );
  });

  const submitButtonEvent = () => {
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
      document.querySelector(".playerName").textContent = nameInput.value;
      document.querySelector(".player-choice").textContent =
        selectedRadioButton.value;
      document.querySelector(".computer-choice").textContent =
        selectedRadioButton.value === "X" ? "O" : "X";
      document.querySelector(".gameState").textContent = "Player Turn";
      modal.close();
      modal.clearValues();
      return true;
    } else {
      return false;
    }
  };

  submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (submitButtonEvent()) {
      player = createParticipant(
        document.querySelector(".playerName").textContent,
        document.querySelector(".player-choice").textContent
      );
      computer = createParticipant(
        "Computer",
        document.querySelector(".computer-choice").textContent
      );
      console.log(player.getName(), player.getSymbol());
      console.log(computer.getName(), computer.getSymbol());
    }
  });
})();
