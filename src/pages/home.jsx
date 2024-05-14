import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <nav className="bg-bule-100 fixed top-0 left-0 flex justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/A">A</Link>
        <Link to="/B">B</Link>
        <Link to="/C">C</Link>
      </nav>
      Home
    </div>
  );
};

export default Home;
