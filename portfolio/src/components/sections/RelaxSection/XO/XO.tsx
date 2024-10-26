
import './XO.css';
import {useEffect, useRef, useState} from "react";
import moment from "moment";


interface Points {
    X: number;
    O: number;
}

interface History {
    board:string[],
    moves: number;
    result: string;
    date: Date;
}

const XO = () => {

    const [points, setPoints] = useState<Points>({X: 0, O: 0});

    const [history, setHistory] = useState<History[]>([]);

    const clearBoard = [
        "","","",
        "","","",
        "","",""
    ];

    const winCombinations = [
        /*Vertical*/
        [0,3,6],
        [1,4,7],
        [2,5,8],
        /*Horizontal*/
        [0,1,2],
        [3,4,5],
        [6,7,8],
        /*Diagonal*/
        [0,4,8],
        [2,4,6]
    ];

    const [board, setBoard] = useState(clearBoard);

    const [xTurn, setXTurn] = useState(false);

    const [canPlay, setCanPlay] = useState(true);

    const [started, setStarted] = useState(false);

    const moves = useRef(0);

    const handleClick = (slotIndex: number) => {
        if(board[slotIndex]!=="" || !canPlay)return;
        setStarted(true);
        setBoard(prevState => prevState.map((slot, index)=>
            index === slotIndex ? (xTurn ? "X" : "O") : slot
        ));
        moves.current++;
    }

    useEffect(() => {
        if(!canPlay || !started)return;
        let turnChar: "X" | "O" = xTurn ? "X" : "O";
        for(let item of winCombinations){
            let correct = 0;
            for(let [index, slot] of  board.entries()){
                if(slot == turnChar && item.includes(index))correct = correct+1;
            }
            if(correct===3){
                setPoints(prevState => ({
                    ...prevState,
                        [turnChar]: prevState[turnChar] + 1
                }));
                setHistory(prev=> [...prev, {moves: moves.current, board: board, result: "Wygrana: " + turnChar, date: new Date()}])
                reset();
                return;
            }else{
                if(moves.current>=9){
                    setHistory(prev=> [...prev, {moves: moves.current, board: board, result: "Remis", date: new Date()}])
                    reset();
                    return;
                }
            }
        }
        setXTurn(!xTurn);
    }, [board]);

    const handleReset = () =>{
        reset();
    }

    const reset = (force?: boolean) => {
        if(!canPlay && !force)return;
        setXTurn(false);
        moves.current = 0;
        setBoard(clearBoard);
        setStarted(false);
    }

    const resetGame = () => {
        setHistory([]);
        setPoints({X: 0, O: 0});
        setCanPlay(true)
        reset(true);
    }

    const playedBoard = useRef<string[]>([]);

    const lastDisplayedHistory = useRef(0);

    const showHistory = (gameNo: number) => {
        if(canPlay) playedBoard.current = board;
        setCanPlay(false);
        lastDisplayedHistory.current = gameNo;
        setBoard(history[gameNo].board);
    }

    const backToPlay = () => {
        setCanPlay(true);
        setBoard(playedBoard.current);
    }

    return (
        <div className="xo">

            <h1 className="xoHeader">
                <span className="red">O</span> {points.O} - {points.X} <span className="blue">X</span>
            </h1>

            <div className="gameButtons">
                {
                    !canPlay && (
                        <div className="gameButton" onClick={backToPlay}>
                            Wróć do rozgrywki
                        </div>
                    )
                }

                <div className="gameButton" onClick={handleReset}>
                    Resetuj bieżącą rozgrywkę
                </div>

                <div className="gameButton" onClick={resetGame}>
                    Resetuj Całą grę
                </div>
            </div>

            <div className="game">
                {
                    history.length>0 && (
                        <div className="leftPane">
                            <h4>Historia</h4>
                            <div className="historyContainer">
                                {
                                    history.reverse().map((h, index)=>
                                        <div key={index} onClick={()=>showHistory(index)} className={"historyElement" + (!canPlay && lastDisplayedHistory.current == index ? " selected" : "")}>{moment(h.date).format("HH:mm:ss")} - <span className="bold">{h.result}</span></div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }

                <div className="board">

                    {
                        board.map((value, index)=>
                            <div key={index} className="slot" onClick={()=>handleClick(index)}>{value == "X" ? <span className="blue">{value}</span> : <span className="red">{value}</span>}</div>
                        )
                    }

                </div>
            </div>

            <div className="footer">
                {
                    !canPlay ? "Przeglądasz grę z historii" : <span>Jesteś w trakcie rozgrywki. Tura: <span className="bold">{xTurn ? "X" : "O"}</span></span>
                }
            </div>

        </div>
    )

}

export default XO;