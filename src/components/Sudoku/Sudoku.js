import React from "react";
import "./style.css";

export function Sudoku() {
    let arr = new Array(81).fill("")

    function Click(event) {
        event.target.classList.toggle("NewBackground");
    }

    return (
        <div className="sudokuParent" onClick={Click}>
            {
                arr.map((elem, index) => <div className="sudokuDiv" key={index}>{elem}</div>)
            }
        </div>
    );
}