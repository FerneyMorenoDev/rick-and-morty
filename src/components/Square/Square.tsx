import { useState } from "react";
import { SquareProps } from "../../types/Square";

export const Square = ({ value, onSquareClick } : SquareProps) : JSX.Element => {
    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}