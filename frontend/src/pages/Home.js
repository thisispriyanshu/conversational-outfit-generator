import React from "react";
import "./Home.css";
import ProdCard from "../components/ProdCard";


const Home = () => {
  return (
    <div>
      <div className="heading">
        <h1>Fashion Outfit Generator</h1>
      </div>
      <div className="mainCont">
        <div className="outfits">
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </div>
        <div className="userChat">
          <div className="inputQuery">
            <input placeholder="Enter your prompt" />
          </div>
          <div>
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
