
import { Link } from "react-router-dom";
import "../styles/infocard.css";
import img from "../assets/images/infocard.jpeg";

const InfoCard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div class="box">
        <div className="left">
          <img src={img} className="tempimg" width={1000} height={600} alt="Info Card" />
        </div>
        <div class="right">
          <div class="content">
            <h1>Worried about your growth?</h1>
            <p>Lets prosper together. </p>
            <p>Quality is our top most priority.</p>
            <div className="btn rounded">
            <Link to="/signup">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
