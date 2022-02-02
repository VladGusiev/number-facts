import React from "react";
import "./TestButton.css"

const TestButton = ({number}) => {
    return (
        <div className="test-button">
            <h2>{number}</h2>
        </div>
    );
}

export default TestButton;