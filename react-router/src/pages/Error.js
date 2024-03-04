import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">
        <button
          className="btn
      "
        >
          Back Home
        </button>
      </Link>
    </section>
  );
};
export default Error;
