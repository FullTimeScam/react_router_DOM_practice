import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <div className="bg-blue-950 text-white min-h-screen flex justify-center items-center">
      Coin symbol : {id}
    </div>
  );
};

export default Detail;
