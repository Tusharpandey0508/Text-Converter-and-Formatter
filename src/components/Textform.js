
import React, { useState } from 'react'



export default function Textform(props) {
   const handleOnChange=(event)=>{
    setText(event.target.value);
}

  const upperCase=()=>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted To Upper Case","success")
  }
  const lowerCase=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Upper Case","success")
}
const reset=()=>{
    let newText = " ";
    setText(newText);
    props.showAlert("Text has Reseted","success")
}
const copy=()=>{
    let newText= document.getElementById("mybox");    newText.select();
    navigator.clipboard.writeText(newText.value);
    setText(newText.value);
    props.showAlert("Copied To Clipboard","success");
}
const removeSpace=()=>{
    let newText = text.split(/[ ]+/ )
    setText(newText.join(" "));
    props.showAlert("Extra Space Has Removed","success");
}

const[text,setText]=useState("");

  return (
      <>
    <div className='containers' style={{color:props.mode==='light'?'black':'whitesmoke'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">

               
             <textarea  className="form-control" value={text} id="mybox" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'whitesmoke':' #212529',color:props.mode==='light'?'black':"white"}} rows="10" placeholder='Enter the Text'></textarea>
            </div>
            <button className='btn btn-success' onClick={reset}>Reset Text</button>
            <button className='btn btn-danger mx-3' onClick={upperCase}>Convert to Upper Case</button>
           
            <button className='btn btn-warning' onClick={lowerCase}>Convert to Lower Case</button>
            <button className='btn btn-secondary mx-3' onClick={copy}>Copy Text</button>
            <button className="btn btn-info mx-2 my-1" onClick={removeSpace}>Remove Extra Space</button>
            

    </div> 
    <div className='container my-4' style={{color:props.mode==='light'?'black':'whitesmoke'}}>
        <h2>Your Text Summary</h2>
    <p><strong>{text.split(" ").length -1} <i>words</i>, {text.length} <i> character</i> </strong><br />
            <strong>{0.008*(text.split(" ").length-1)} <i>Minutes to read</i> </strong></p>
    </div>
    </>

  )
}
