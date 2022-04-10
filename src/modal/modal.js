import { getByTitle } from "@testing-library/react";
import React, { useState } from "react";
import './modal.css';


function Modal({active, setActive, onRename, onChange, nameT}) {

    
    function handlerInp (event)  {
        event.preventDefault()                  // при нажатии на кнопку не перезагружает страницу
        onChange(event.target.value)
    }
    


    return (
        <div className={active ? 'modal activ' : 'modal'} onClick={()=> setActive(false)}>
            <div className='modal_body' onClick={e => e.stopPropagation()}>
                <h1>Редактируй</h1>
                <form onSubmit={handlerInp}> 
                    <input 
                        type='text'  value={nameT}
                        className='inp' 
                        onChange={handlerInp} 
                        onInput={onRename}
                    ></input>
                    <button 
                        type='submit' 
                        className="sub" 
                        onClick={()=> setActive(false)}>Изменить
                    </button>
                </form>
            </div>
        </div>
        
    )
}


export default Modal