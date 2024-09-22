function validMove(target, source, startSquareId) {
    const type = source.getAttribute('type')

    switch (type) {
        case 'pawn':
            return pawnMove(target, startSquareId);
        case 'rook':
            return true;
        case 'knight':
            return true;
        case 'bishop':
            return true;
        case 'queen':
            return true;
        case 'king':
            return true;
        default:
            return false;
    }
}

function pawnMove(target, startSquareId) {
    //TODO
    return true;
}