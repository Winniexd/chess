const blackHomeSquareId = [8, 9, 10, 11, 12, 13, 14, 15];
const whiteHomeSquareId = [48, 49, 50, 51, 52, 53, 54, 55];

function validMove(target, source, startSquareId) {
    const type = source.getAttribute('type')
    const targetId = parseInt(target.getAttribute('square-id')) || parseInt(target.parentNode.getAttribute('square-id'));
    const startId = parseInt(startSquareId);
    const color = source.getAttribute('color')
    const targetColor = target.getAttribute('color')

    switch (type) {
        case 'pawn':
            return pawnMove(targetId, startId, color, targetColor, target);
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

function pawnMove(targetId, startId, color, targetColor, target) {

    if (!targetColor && ((color === 'black' && blackHomeSquareId.includes(startId) && ((startId + 16) === targetId))
        || (color === 'white' && whiteHomeSquareId.includes(startId) && ((startId - 16) === targetId))))
        return true;
    if (!targetColor && (((color === 'black' && (startId + 8) === targetId))
        || ((color === 'white' && (startId - 8) === targetId))))
        return true;
    if (targetColor && targetColor !== color && ((color === 'black' && (startId + 7 === targetId || startId + 9 === targetId))
        || (color === 'white' && (startId - 7 === targetId || startId - 9 === targetId)))) {
        return true;
    }
}