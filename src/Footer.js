import React from 'react'

function Footer({length}) {
   
  return (
    <footer>
{(length>1) ?(<p>{length} number of Items</p>):(<p>{length} number of Item</p>)} 
    </footer>
  )
}

export default Footer