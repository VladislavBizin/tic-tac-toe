class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.symbol = new Map([["x", "o"], ["o", "x"]]);
        this.currentSymbol = "x";
        this.stepCount = 0;
        this.winner = null;
    }


    checkWinner(symbol){
        let winnerArray = [
            //! rows
            [this.field[0][0],this.field[0][1],this.field[0][2]],
            [this.field[1][0],this.field[1][1],this.field[1][2]],
            [this.field[2][0],this.field[2][1],this.field[2][2]],
            //!columns
            [this.field[0][0],this.field[1][0],this.field[2][0]],
            [this.field[0][1],this.field[1][1],this.field[2][1]],
            [this.field[0][2],this.field[1][2],this.field[2][2]],
            //!diagonals
            [this.field[0][0],this.field[1][1],this.field[2][2]],
            [this.field[0][2],this.field[1][1],this.field[2][0]],
        ];

        this.winner = winnerArray.reduce((acc,e)=>{
            if(e[0] === symbol && e[1] === symbol && e[2] === symbol){
                return symbol;
            }
            return acc;
        },null);
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] !== null){
            return this;
        }
        this.field[rowIndex][columnIndex] = this.currentSymbol;
        // ! Should check winner
        this.checkWinner(this.currentSymbol);
        this.currentSymbol = this.symbol.get(this.currentSymbol);
        this.stepCount ++;
    }

    isFinished() {
        return this.stepCount === 9 || this.winner !== null;

    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.stepCount >= 9;
    }

    isDraw() {
        return this.winner === null && this.stepCount === 9;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;
