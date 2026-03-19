import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
const [activeIndex, setActiveIndex] = useState(null)

const handleClick = (index) => {
    setActiveIndex(prevIndex =>(prevIndex === index ? null : index))
}
 

  return (
    <div>
        {items.map((item, index) => (
            <AccordionItem
                key={index} 
                title={item.title} 
                content={item.content}
                isOpen={activeIndex === index} 
                onClick={() => handleClick(index)}
            />
        ))}
    </div>
  )
}

export default Accordion;