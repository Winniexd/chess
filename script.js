const chessboard = document.getElementById("chessboard");

//Uppercase = Black Pieces, Lowercase = White Pieces
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

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square");

        if ((row + col) % 2 == 0)
            square.classList.add("white");
        else
            square.classList.add("black");
        
        square.setAttribute('square-id', row*8+col);
        const piece = initialBoard[row][col];
        if (piece !== "") {
            const pieceImg = document.createElement("img");
            pieceImg.src = pieceImages[piece];
            square.appendChild(pieceImg);
        }
        square.firstChild?.setAttribute('draggable', true);

        chessboard.appendChild(square);
    }
}