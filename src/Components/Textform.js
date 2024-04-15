import React, { useState } from 'react'

export default function Textform(props) {

    //const [mode, setMode] = useState(props.mode)
    

  const handleUpClick = (event)=>{ // converts to upper case
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{ // converts to lower case
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{ // runs when there is a change in text box
    setText(event.target.value);
  } 
  const handleClearText = (event)=>{ // clears the whole text box
    setText("");
  } 
  const handleCopyText = ()=>{ // copy the whole text box
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard")
  } 
  const handleCutText = ()=>{ // cuts the whole text box
    navigator.clipboard.writeText(text);
    setText("");
    alert("Text extracted to clipboard")
  } 
  const calWords = (text) => { // calculates number of words in a string
    let len = text.split(" ").length;
    return text[text.length] === ' ' ? len-1:len;
  }
  const [text, setText] = useState("");
  return (
    <>
        <div className='container' style = {{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} value = {text} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1'  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1'  onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1'  onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-primary mx-1'  onClick={handleCopyText}>Copy Text</button>
            <button className='btn btn-primary mx-1'  onClick={handleCutText}>Cut Text</button>
        
        </div>
        <div className='container my-3' style = {{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Your text summary is here</h1>
                Length: {text.length} Words: {calWords(text)}
                <h2>Preview here:</h2>
                {text}
                <br/>
                {/* <span>Your current mode is: {mode ? "Light" : "Dark"} </span> */}
        </div>
    </>
  )
}
