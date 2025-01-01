import React from 'react'
import { useState } from 'react';

const InputArea = (props) => {

    const [inputText, setinputText] = useState('');

    function Additem(event){
        const newValue = event.target.value;
        setinputText(newValue);
    }

    return (
        <div className="form">
            <input onChange={Additem} type="text" value={inputText}/>
            <button onClick={()=>{
                props.newItem(inputText); 
                setinputText('');
            }} type='submit'><span>Add</span></button>
        </div>
    )
}

export default InputArea