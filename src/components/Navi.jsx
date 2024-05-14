import { Link, useNavigate } from "react-router-dom";

const Navi = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-100 fixed top-0 left-0 flex justify-center gap-4">
      <Link to="/">Home</Link>
      <Link to="/A">A</Link>
      <button
        onClick={() => {
          navigate("/B");
        }}
      >
        B
      </button>
      <Link to="/C">C</Link>
    </nav>
  );
};

export default Navi;
