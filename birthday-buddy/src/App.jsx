import { useState } from "react";
import "./index.css";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays Today</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>Clear List</button>
      </section>
    </main>
  );
}

export default App;
