import { useState } from "react";
import { Board } from "../Board/Board"
import { nextSquaresType } from "../../types/Game";
import './Game.scss';

export const Game = () => {
    const [history, setHistory] = useState<nextSquaresType[]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    const turnsLeft = 9 - currentMove;

    const handlePlay = (nextSquares: nextSquaresType) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
    }

    const jumpTo = (nextMove: number) => {
        setCurrentMove(nextMove);
    }

    const moves = history.map(( _, move:number ): JSX.Element => {
        const description: string = move > 0 ? `Go to move #${move}` : `Go to game start`;
        return (
            <ul key={move}>
                {currentMove === move ? (
                    <p>You are at move #{currentMove}</p>
                ) : (
                    <button onClick={() => jumpTo(move)}>{description}</button>
                )}
            </ul>
        );
    })

    return (
        <div className="game">
            <div className="game__board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                    turnsLeft={turnsLeft}
                />
            </div>
            <div className="game__info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}