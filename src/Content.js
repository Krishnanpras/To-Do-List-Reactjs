import React from "react";
import ItemsList from "./ItemsList";
function Content({ handlecheck, items, Delete,search,equal }) {
  return (
    < >
      {/* Check if it is more then one list exists */}
      {items.length ? (
        <ul>
<ItemsList 
handlecheck={handlecheck}
Delete={Delete} 
items={items}/>
 <br />
        </ul>
       
      ) : (
       
        <p style={{ fontSize:"28px",color:"white" }}>Your list is Empty</p>
      )}

      
   {/* {console.log(equal)}  */}
      
    </>
  );
}

export default Content;
