import React from "react";
import LineItems from "./LineItems";
function ItemsList({ handlecheck, items, Delete }) {
  return (
    <div>
      {items.map((comes) => (
        <LineItems
        handlecheck={handlecheck}
        Delete={Delete} 
        //To avoid Error in console every List should have return with key
        key={comes.id}
        items={items}
        comes={comes}
        />
      ))}
    </div>
  );
}

export default ItemsList;
