

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div>
        <button onClick={onClick}>
            <h3>{title}</h3>
            <span>{isOpen ? '-' : '+'}</span>
        </button>
        <div>
            <div>{content}</div>
        </div>
    </div>
  )
}
export default AccordionItem