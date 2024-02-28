import {useState} from 'react';

import './index.css';

let Question=({title,info})=>{
    let [state,setState]=useState(false)
    let onClickHandler=()=>{
        setState(!state)
    }
    return <div className='question'>
        <h4>{title}</h4>
        <div>
        <button onClick={onClickHandler} className='btn'>{state?'-':'+'}</button>
        </div>
        {state&&<p>{info}</p>}
    </div>
}

export default Question;