import { useState } from "react";
import "./index.css";
import Alert from "./Alert";
import List from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: true, msg: "hello world", type: "success" });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
      const newItem = {
        id: new Date().getTime().toLocaleString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {" "}
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn">Clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
