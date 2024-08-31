import React, { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState('enter text here');

    const handleupclick = () => {
        console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert();
    }

    const handleonchange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }


    const handleCopy = () => {
        var text = document.getElementById("my box");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleClear = () => {
        let newText = " "
        setText(newText);
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>

                <div class="mb-3">

                    <textarea class="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="my box" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleupclick}> convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}> copy Text</button>
                <button className="btn btn-primary mx-2." onClick={handleClear}> clear Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summery</h1>
                <p>{text.split(" ").length} words and {text.length}character</p>
                <p>{0.08 * text.split(" ").length} miniutes to read</p>

            </div>



        </>
    )
}
