import React from "react";
import "./TestButton.css"



const TestButton = ({number, onClickChange}) => {
    return (
        <button value={number} onClick={onClickChange}>{number}</button>
    );
}

export default TestButton;
