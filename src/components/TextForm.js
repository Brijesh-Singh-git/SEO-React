import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!" , "success")

    }
    const handleLoClick = () =>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!" , "success")
    }
    const handleClearClick = () =>{
        // console.log("Cleartext was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!" , "success")
    }

    const handleOnChange =(event) =>{
        console.log("On Chnage");
        setText(event.target.value);
    }

    const handleCopy =() => {

        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!" , "success")
    }

    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed" , "success")
    }

    const [text, setText] = useState('Enter text here');
    // text ="new TExt"; //Wrong way to  change the state
    // setText("new Text"); //Correct way to change the state
  return (
    <>
    
         <div className="container" style= {{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3 my-3">
            <textarea className="form-control" value={text} id="myBox" rows="8" style= {{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange}></textarea>
            </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div> 

        <div className="container my-2" style= {{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ?text :"Nothing to Preview!"}</p>
        </div> 
        </>
    
  )
}

