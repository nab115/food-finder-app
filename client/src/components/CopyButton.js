import React, { useState } from "react";

function CopyButton({text}) {

    const [style, update] = useState({display: 'none'})

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const copyHandler = async () => {
        navigator.clipboard.writeText(text);
        update({display: 'initial'})
        await sleep(1000);
        update({display: 'none'})
    }

    return (
        <span className="copy-container">
            <button onClick={copyHandler} className="copy-btn"> </button>
            <span className="alert" style={style}>Copied!</span>
        </span>
    )
}

export default CopyButton;