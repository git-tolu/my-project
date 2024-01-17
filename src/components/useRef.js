import React, { useRef } from 'react'
// import React, { useState } from 'react';


export default function TextInputWithFocusButton () {
    const inputFoc = useRef(null)

    function click (){
        inputFoc.current.focus();
    }
    
    return(
        <>
        <input ref={inputFoc} type='text' />
        <button className='px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-400' onClick={click}>click</button>
        
        </>
    )
}