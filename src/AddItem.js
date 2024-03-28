import React from 'react'
import { FaPlus } from 'react-icons/fa6'

import { useRef } from 'react'

function AddItem({AddClick,NewItem,SetNewItem}) {

  //use ref 
  const inputRef=useRef();
  return (
    <form className='addForm' onSubmit={AddClick} >

        <label htmlFor="addItem">AddItems</label>
        <input 
        autoFocus
        ref={inputRef}
        type="text"
        id='addItem'
        placeholder='AddItem'
        
        value={NewItem}
        onChange={(e)=>SetNewItem(e.target.value)}
        />
        <button  
        onClick={()=>inputRef.current.focus()}
        type='submit'
       
        
        >  <FaPlus/> </button>

    </form>
  )
}

export default AddItem