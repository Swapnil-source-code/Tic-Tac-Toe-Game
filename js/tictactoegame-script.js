let btnRef = document.querySelectorAll('.button-option');
let popupRef = document.querySelector('.popup');
let newgameBtn = document.getElementById('newgame');
let restartBtn = document.getElementById('restart');
let msgReg = document.getElementById('message');


//Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6]
];

//Player "X" Plays first
let xTurn = true;
let count = 0;


//disable all buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enable popup
  popupRef.classList.remove("hide");
}

//Enable all button for New Game or Restart Game
const enabledbuttons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
}

// this functionis executed when player is win 
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgReg.innerHTML="X is Winer"
  } else {
    msgReg.innerHTML="O is Winer"
  }
 }

const drawFunction = () => {
  disableButtons();
  msgReg.innerHTML = " It's Draw";
}


newgameBtn.addEventListener('click',()=> {
  count =0;
  enabledbuttons();
});
restartBtn.addEventListener('click', () => {
  count =0;
  enabledbuttons();
})



//Win logic
const winChecker = () => {
  //Loop through allwin pattern
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //check if element are filled
    //if 3 empty element are same and would given win as would
    if (element1 != "" && (element2 != "") && (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        setTimeout(() => {
          winFunction(element1);
        }, 500);
      }
    }
  }
}

//Display X/O on click
btnRef.forEach((element) => {
  
  element.addEventListener('click', () => {
    
    if (xTurn) {
      xTurn = false;
      //display X
      element.innerHTML = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //display X
      element.innerHTML = "O";
      element.disabled = true;
    }
    
    // Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }

    //Check for Win on every click 
    winChecker();

  });

});

//Enablec button and disabled popup on page load
window.onload = enabledbuttons;




