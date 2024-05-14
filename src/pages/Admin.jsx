import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Admin = () => {
  const { password } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (password !== "1234") {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-purple-900 text-white font-bold min-h-screen flex justify-center items-center">
      Admin
    </div>
  );
};

export default Admin;
