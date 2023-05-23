type nextSquaresType = null[] | string [];

export interface BoardInterface {
    xIsNext: boolean,
    squares: null[] | string[],
    onPlay: (nextSquares : nextSquaresType) => void,
    turnsLeft: number,
};

export interface calculateWinnerType { 
    winner: string | null,
    equalSquares?: number[],
};