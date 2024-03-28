import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
function LineItems({ handlecheck, comes, Delete }) {
  return (
    <div>
        <li className="item" key={comes.id}>
          <input
            type="checkbox"
            onChange={() => handlecheck(comes.id)}
            checked={comes.checked}
          />
          <label
            style={comes.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handlecheck(comes.id)}
          >
            {comes.value}
          </label>
          <FaTrashAlt
            role="button"
            tabIndex="0"
            onClick={() => Delete(comes.id)}
          />
        </li>
    </div>
  )
}

export default LineItems