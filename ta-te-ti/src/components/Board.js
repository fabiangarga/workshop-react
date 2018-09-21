import React, { Component } from 'react';
import Square from './Square';
class Board extends Component {
    state = {
        firstPlayer:true,
        squares: Array(9).fill('-'),
        winner:''
    };
    checkWinner = () => {
        let squares = this.state.squares;
        if ( squares.filter(x => x === '-').length === 0) {
            this.resetState();
            alert('No more game pal!');
            return;
        }
        let matchX = squares.map( (x, i) => {
            if (x === 'x') {
                return i;
            }
            return undefined;
        });
        let matchO = squares.map( (x, i) => {
            if (x === 'o') {
                return i;
            }
            return undefined;
        });
        if (this.verifyPlay(matchX)) {
            alert('Winner player X');
            this.resetState();
        } else if (this.verifyPlay(matchO)) {
            alert('Winner player O');
            this.resetState();
        }
    };
    verifyPlay = indexes => {
        indexes = indexes.filter( x => x !== undefined);
        let winner = false;
        let winDiagonalRight = [0,4,8];
        let winDiagonalLeft = [2,4,6];
        if(indexes.length === 3) {
            indexes.sort((a, b) => a - b);
            if( indexes.every( x => winDiagonalRight.includes(x))) {
                winner = true;
            } else if ( indexes.every( x => winDiagonalLeft.includes(x))) {
                winner = true;
            } else if ( (indexes[0] + indexes[2]) / 2 === indexes[1] ) {
                winner = true;
            }
        }
        return winner;
    };
    resetState = () => {
        this.setState(
            {
                firstPlayer:true,
                squares: Array(9).fill('-'),
                winner:''
            }
        );
    };
    updateValue = value => {
        let squares = this.state.squares;
        let val = (this.state.firstPlayer) ? 'x' : 'o';
        if ( squares[value] === '-' ) {
            squares[value] = val;
            this.setState( {squares: squares });
            this.setState( {firstPlayer: !this.state.firstPlayer });
            this.checkWinner();
        } else {
            alert('Choose another Square pal!');
        }

    };
    render() {
        return (
            <div className="board">
                <div className="row">
                    <Square value={this.state.squares[0]} updateValue={() => this.updateValue(0)}/>
                    <Square value={this.state.squares[1]} updateValue={() => this.updateValue(1)}/>
                    <Square value={this.state.squares[2]} updateValue={() => this.updateValue(2)}/>
                </div>
                <div className="row">
                    <Square value={this.state.squares[3]} updateValue={() => this.updateValue(3)}/>
                    <Square value={this.state.squares[4]} updateValue={() => this.updateValue(4)}/>
                    <Square value={this.state.squares[5]} updateValue={() => this.updateValue(5)}/>
                </div>
                <div className="row">
                    <Square value={this.state.squares[6]} updateValue={() => this.updateValue(6)}/>
                    <Square value={this.state.squares[7]} updateValue={() => this.updateValue(7)}/>
                    <Square value={this.state.squares[8]} updateValue={() => this.updateValue(8)}/>
                </div>
            </div>
        );
    }
}

export default Board;
