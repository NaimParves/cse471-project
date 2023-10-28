import { useState } from "react";

interface Props {
  items : string[];
  heading : string;
  OnSelectItem: (item: string) => void;
}

function Listgroup({items, heading, OnSelectItem} : Props) {
  
  // Hook 
  const [selectedIndex,setselectedIndex] = useState(-1)
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {setselectedIndex(index); OnSelectItem(item)}}
            
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listgroup;


