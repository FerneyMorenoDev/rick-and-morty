import { useState } from "react"
import { Square } from "../Square/Square"
import { Heading } from "../Heading";
import { Section } from "../Section";
import { calculateWinner } from "../../helpers";
import { BoardInterface, calculateWinnerType } from "../../types/Board";

export const Board = ({ xIsNext, squares, onPlay, turnsLeft }: BoardInterface) : JSX.Element => {
    const handleClick = (value : number) => {
        if (squares[value] || calculateWinner(squares).winner) return;
        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[value] = 'X';
        } else {
            nextSquares[value] = 'O';
        }

        onPlay(nextSquares);
    }

    const { winner }: calculateWinnerType = calculateWinner(squares);
    let status;
    if (winner) {
        status = `winner: ${winner}`;
    } else {
        status = turnsLeft > 0 ? `Next player: ${xIsNext ? 'X' : 'O'}` : 'It is a draw!';
    }

    return (
        <Section>
            <Heading>Tic-tac-toe game</Heading>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </Section>
    )
}