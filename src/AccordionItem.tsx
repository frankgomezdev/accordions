type Props = {
  title: string;
  children: string;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({ title, children, isOpen, onToggle }: Props) {
  return (
    <section className="accordion-item">
      <button className="accordion-header" onClick={onToggle}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="accordion-content">{children}</p>}
    </section>
  );
}
export default AccordionItem;
