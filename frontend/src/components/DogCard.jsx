import { useNavigate } from "react-router-dom";

import dogImage from "../assets/dogHolder.jpg";

import "../styling/DogCard.css";

function DogCard() {
  const navigate = useNavigate();

  return (
    <div className="card p-2" style={{"width": "18rem"}}>
      <div className="card-body">
        <img src={dogImage} className="card-img-top"></img>
        <h5 className="card-title mt-3">Name: Max</h5>
        <p className="card-text">
            Age: 3
        </p>
        <p className="card-text">
            Breed: Border Collie
        </p>
        <a href="#" className="link-to-dog">
          View Profile
        </a>
      </div>
    </div>
  );
}

export default DogCard;
