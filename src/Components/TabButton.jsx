import React from 'react'

function TabButton({children, onSelect, isSelcted}) {
  return (
    <div>
        <li>
            <button 
            className={isSelcted ? 'active':""}
            onClick={onSelect}>
              {children}
            </button>
        </li>
      
    </div>
  )
}

export default TabButton
