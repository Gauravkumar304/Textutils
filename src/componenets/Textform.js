import React, { useState } from 'react'    //Hooks


export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted into uppercase","success")
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted into lowercase","success")
  };

  const handleclearClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText =' ';
    setText(newText)
    props.showAlert("cleared","success")
  };

  const handleOnChange = (event) => {
    //console.log("On change")
    setText(event.target.value)
  };

  const handlecopy =() =>{
    console.log("copy");
    var text =document.getElementById("myBox");
    text.select();                                 
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied","success")
  }

  const handleExtraSpace = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra space is removed","success")
  }

  const [text, setText] = useState('Enter text here');
  //text ="new text";  // wrong way to change state 
  //setText("new text"); //correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark' ? 'white':'#142e4e'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey':'white' ,color:props.mode==='dark' ? 'white':'#142e4e'}} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={handleclearClick}>Clear</button>
      <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy text</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>remove extra space</button>
    
    
    </div>
    <div className="container  my-3"  style={{color:props.mode==='dark' ? 'white':'#142e4e'}}>
      <h2> your text summary</h2>
      <p>{text.split(" ").length} words  and {text.length} character</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
