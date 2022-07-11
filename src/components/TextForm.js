import React, { useState } from 'react'


export default function TextForm(props) {

    const handelUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handelLoClick = () => {
        //console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");

    }

    const handelClearClick = () => {
        let newText ="";
        setText(newText);
        props.showAlert("Clear Text","success");

    }
    const handelOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    //text="new text"; // wrong way to change state
    //setText("new text"); //Correct way to change the state
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743-'}} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-3" onClick={handelUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelClearClick}>Clear</button>

            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    )
}

