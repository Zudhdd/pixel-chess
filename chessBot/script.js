// Рендерим шахматную доску
function renderChessBoard() {
    const board = document.getElementById("chessBoard");
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.className = (row + col) % 2 === 0 ? "white" : "black";
            board.appendChild(square);
        }
    }
}

document.addEventListener("DOMContentLoaded", renderChessBoard);