// rfc 
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Uppercase was clicked");
        const upperCaseText = Text.toUpperCase();
        SetText(upperCaseText);
        props.showAlert('Converted to uppercase', 'success');
    }

    const handleLoClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Lowercase was clicked");
        const lowerCaseText = Text.toLowerCase();
        SetText(lowerCaseText);
        props.showAlert('Converted to lowercase', 'success');
    }

    const handleClearText = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("CLear text was clicked");
        SetText('');
        props.showAlert('Text cleared', 'success');
    }

    const handleReverseText = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Revrsetext was clicked");
        const reverseText = Text.split('').reverse().join('');
        SetText(reverseText);
        props.showAlert('Text has been reversed', 'success');
    }

    const copyToClipboard = (text) => {
        text.preventDefault(); // Prevent the default form submission behavior
        console.log("copy to clipboard was clicked");
        var textField = document.getElementById('myBox')
        text = textField.value
        textField.select()
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges()
        props.showAlert('Text copied to clipboard', 'success');
    }

    const removeXtraspace = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Extra space was clicked");
        const newText = Text.split(/[ ]+/);
        SetText(newText.join(" "));
        props.showAlert('Extra space has been removed from text', 'success');
    }

    const handleOnChange = (event) => {
        console.log("On change");
        SetText(event.target.value);
    }

    const [Text, SetText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#1d2633' : 'white' }}>
                <h2 style={{ color: props.mode === 'light' ? '#1d2633' : 'white' }}>
                    {props.heading}
                </h2>
                <form>
                    <div className="mb-3">
                        {/* <label htmlFor="myBox" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        <textarea className="my-3" name="form-control" value={Text} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#1d2633' : 'white', color: props.mode === 'dark' ? 'white' : '#1d2633', width:'100%' }} onChange={handleOnChange} rows="8"></textarea>
                        <div>
                        <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
                        <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse text</button>
                        <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper case</button>
                        <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower case</button>
                        <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy to clipboard</button>
                        <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={removeXtraspace}>Remove extra spaces</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#1d2633' : 'white' }}>
                <h2>Your text summary</h2>
                <p>total {Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
                <h3>Preview</h3>
                <p>{Text.length > 0 ? Text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
