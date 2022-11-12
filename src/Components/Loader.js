// import { Dna } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "grid",
          justifyContent: "center",
          backgroundColor: "#050505",
        }}
      >
        <div className="loader"></div>
      </div>
    </>
  );
};

export default Loader;
