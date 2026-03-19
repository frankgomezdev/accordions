import { useRef } from "react"


function AccordionItem({ title, content, isOpen, onClick }) {
  const contentHeight = useRef(null)  
  return (
    <div>
        <button className="accordion-btn" onClick={onClick}>
            <h3 className="accordion-title">{title}</h3>
            <span>{isOpen ? '-' : '+'}</span>
        </button>
        <div 
            className="accordion-content" 
            ref={contentHeight}
            style={{
          height: isOpen ? contentHeight.current.scrollHeight: 0
            }} 
        >
            <div className="accordion-content-inner">{content}</div>
        </div>
    </div>
  )
}
export default AccordionItem