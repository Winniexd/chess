
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

const pieceTypes = {
    "p": "pawn",
    "P": "pawn",
    "r": "rook",
    "R": "rook",
    "n": "knight",
    "N": "knight",
    "b": "bishop",
    "B": "bishop",
    "q": "queen",
    "Q": "queen",
    "k": "king",
    "K": "king",
}

const boardCoords = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
]

const initialBoard = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"]
];

function createBoard() {
    for (row = 0; row < 8; row++) {
        for (col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            ((row + col) % 2 === 0) ? square.classList.add("white") : square.classList.add("black");

            square.setAttribute('square-id', row*8+col);
            square.setAttribute('coord', boardCoords[row][col]);

            const startPiece = initialBoard[row][col];
            if (startPiece !== "") {
                const pieceImg = document.createElement("img");
                pieceImg.src = pieceImages[startPiece];
                pieceImg.setAttribute('type', pieceTypes[startPiece]);
                if (row < 2)
                    pieceImg.setAttribute('color', 'black')
                else 
                    pieceImg.setAttribute('color', 'white')
                square.appendChild(pieceImg);
            }
            square.firstChild?.setAttribute('draggable', true);

            chessboard.appendChild(square);
        }
    }
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
    e.stopPropagation();

    if (playerTurn === targetElement.getAttribute('color') && validMove(e.target, targetElement, startSquareId))
    {
        e.target.appendChild(targetElement)
        changePlayer();
    }
}

playerTurn = "white";

function changePlayer() {
    (playerTurn === "white") ? playerTurn = "black" : playerTurn = "white";
}