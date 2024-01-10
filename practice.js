let turn = "X";
let gameover = false;
let counter = 0;

function changeTurn() {
    counter++;
    document.getElementById("turn").innerText = turn;
    turn = (turn === "X") ? "O" : "X";
}

// Check win 
const checkWin = () => {
    let boxText = document.getElementsByClassName("box");
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    winConditions.forEach(check => {
        if (boxText[check[0]].innerText !== "") {
            if ((boxText[check[0]].innerText === boxText[check[1]].innerText) &&
                (boxText[check[2]].innerText === boxText[check[1]].innerText)) {
                alert("Player " + turn + " won!");
                gameover = true;
            }
        }
    });
};

function checkDraw() {
    if (counter === 9) {
        gameover = true;
        alert("It's a draw!");
    }
}

// Game logic 
const boxes = document.getElementsByClassName("boxMain");
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector(".box");
    box.addEventListener("click", () => {
        if (boxText.innerText === '' && !gameover) {
            boxText.innerText = turn;
            changeTurn();
            checkWin();
            checkDraw();
        }
    });
});

// Reset
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    Array.from(boxes).forEach(box => {
        let boxText = box.querySelector(".box");
        boxText.innerText = "";
    });
    turn = "X";
    gameover = false;
    counter = 0;
    document.getElementById("turn").innerText = turn;
});
