const chessboard = document.getElementById("chessboard");

//Uppercase = Black Pieces, Lowercase = White Pieces

const pieceImages = {
    "r": "sprites/black-rook.png",
    "n": "sprites/black-knight.png",
    "b": "sprites/black-bishop.png",
    "q": "sprites/black-queen.png",
    "k": "sprites/black-king.png",
    "p": "sprites/black-pawn.png",
    "R": "sprites/white-rook.png",
    "N": "sprites/white-knight.png",
    "B": "sprites/white-bishop.png",
    "Q": "sprites/white-queen.png",
    "K": "sprites/white-king.png",
    "P": "sprites/white-pawn.png"
};

const initialBoard = [
    "r", "n", "b", "q", "k", "b", "n", "r",
    "p", "p", "p", "p", "p", "p", "p", "p",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "P", "P", "P", "P", "P", "P", "P", "P",
    "R", "N", "B", "Q", "K", "B", "N", "R"
];

function createBoard() {
    initialBoard.forEach((startPiece, i) => {
        const square = document.createElement("div");
        square.classList.add("square");
        const row = Math.floor(((63 - i) / 8) + 1);
        if ((row) % 2 === 0)
            square.classList.add(i % 2 === 0 ? "white" : "black");
        else
            square.classList.add(i % 2 === 0 ? "black" : "white");

        square.setAttribute('square-id', i);

        if (startPiece !== "") {
            const pieceImg = document.createElement("img");
            pieceImg.src = pieceImages[startPiece];
            square.appendChild(pieceImg);
        }
        square.firstChild?.setAttribute('draggable', true);

        chessboard.appendChild(square);
    })
}

createBoard();

const squares = document.querySelectorAll("#chessboard .square");

squares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', drop);
})

let startSquareId;
let targetElement;

function dragStart(e) {
    startSquareId = e.target.parentNode.getAttribute('square-id')
    targetElement = e.target
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.stopPropagation()

    if (e.target.getAttribute('square-id') !== null && !(e.target.classList.contains('piece')))
        e.target.appendChild(targetElement)
}

playerTurn = "white";

function changePlayer() {
    (playerTurn === "white") ? playerTurn = "black" : playerTurn = "white";
}