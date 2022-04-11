import { getByTitle } from "@testing-library/react";
import React, { useState } from "react";
import './modal.css';



function Modal({active, setActive, onCreate, title}) {

    const[name,setName] = useState('')     // input в модалке

    function handlerInp (event)  {
        event.preventDefault()                  // при нажатии на кнопку не перезагружает страницу
        onCreate(name)                          // редактирует todo через инпут модалки
    }
    


    return (
        <div className={active ? 'modal activ' : 'modal'} onClick={()=> setActive(false)}>
            <div className='modal_body' onClick={e => e.stopPropagation()}>
                <h1>Редактируй</h1>
                <form onSubmit={handlerInp}> 
                    <input value={name || title} onChange={event => setName(event.target.value)}
                        type='text'  
                        className='inp' 
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