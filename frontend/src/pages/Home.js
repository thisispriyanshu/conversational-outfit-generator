import React, { useState } from "react";
import "./Home.css";
import ProdCard from "../components/Dashboard";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = `https://flipkart-grid-5-0-backend.onrender.com/outfit/generate_outfit`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });
      const data = await response.json();
      setImageUrl(data.result[0].url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
            <form onSubmit={handleSubmit}>
              <label>
                Enter your prompt:
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </label>
              <input type="submit" />
            </form>
          </div>
          <div>
            {/* <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"></img> */}
            {imageUrl && <img src={imageUrl} alt="Generated Outfit" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
