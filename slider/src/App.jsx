import { useState } from "react";
import data from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./index.css";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <section className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaChevronLeft />
            </article>
          );
        })}
        <button className="prev">
          <FaChevronLeft />
        </button>
        <button className="next">
          <FaChevronRight />
        </button>
      </section>
    </section>
  );
}

export default App;
