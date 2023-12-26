import React,{ useState } from 'react';



export default function TextForms(props) {
    const [text, setText] = useState("");

   const upClick=()=>{
     console.log("clicked"+text);
      let newText=text.toUpperCase();
     setText(newText);
    console.log("clicked"+ newText);
  
    }
    const lowercase=()=>{
        console.log("clicked"+text);
         let newText=text.toLowerCase();
        setText(newText);
       console.log("clicked"+ newText);
     
       }

    const handleOnChange=(event)=>{
        console.log("clicked");
        setText(event.target.value);
       }
      const setClear=()=>{
      setText("");
       };
  return (
    
    <div className='container'style={{color:props.mode==='dark'?'white':'#0F1111'}}>
    <div class="mb-3">
    <h3 className='my-3'>{props.head}</h3>
  <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#0F1111':'white' , color:props.mode==='dark'?'white':'#0F1111' }} placeholder='Enter your text here' value={text} onChange={handleOnChange}></textarea>
  <button type="button" className="btn btn-primary my-3" onClick={upClick}>Convert to Uppercase</button>
  <button type="button" class="btn btn-info mx-3" onClick={lowercase}>Convert to Lowercase</button>
  <button type="button" className="btn btn-danger " onClick={setClear}>Clear</button>


<div class="btn-group mx-3">
  <button type="button" class="btn btn-warning">Text Events</button>
  <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/">Download Text</a></li>
    <li><a class="dropdown-item" href="/">Italic</a></li>
    <li><a class="dropdown-item" href="/">Bold</a></li>
    <li><a class="dropdown-item" href="/">Copy text</a></li>
    <li><a class="dropdown-item" href="/">Remove space</a></li>
    <li><a class="dropdown-item" href="/">Capitalize</a></li>
    <li><a class="dropdown-item" href="/">Reverse Text</a></li>
  </ul>
</div>
   </div>
   <h4>total character is {text.length} and words is {text.split(" ").length}</h4>
   <h3>Preview :</h3>
   <p>{text}</p>
   </div>
  )
}
