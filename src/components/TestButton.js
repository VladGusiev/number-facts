import React from "react";
import "./TestButton.css"

const TestButton = ({number}) => {
    return (
        <div className="test-button">         
            <a href={`http://numbersapi.com/#${number}`}>{number}</a>
        </div>
    );
}

export default TestButton;
