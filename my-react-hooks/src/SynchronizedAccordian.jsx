import { useState } from "react";

export default function Accordian() {
  const [activeIndex, setActiveIndex] = useState(0);
  let isActive = false;
  function handleToggle(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }
  return (
    <div>
      <Panel
        title="section1"
        onToggle={() => handleToggle(1)}
        isActive={activeIndex === 1}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Panel>
      <Panel
        title="section2"
        onToggle={() => handleToggle(2)}
        isActive={activeIndex === 2}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Panel>
      <Panel
        title="section3"
        onToggle={() => handleToggle(3)}
        isActive={activeIndex === 3}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Panel>
    </div>
  );
}

function Panel({ title, onToggle, isActive, children }) {
  return (
    <section
      style={{
        border: "1px solid #ccc",
        margin: "8px 0",
        paddingBottom: "25px",
      }}
    >
      <h3>{title}</h3>
      <p style={{ padding: "15px", marginBottom: "15px" }}>
        {isActive && children}
      </p>

      <button
        type="button"
        onClick={onToggle}
        style={{ margin: "auto", padding: "15px" }}
      >
        {isActive ? "Hide" : "Show"}
      </button>
    </section>
  );
}
