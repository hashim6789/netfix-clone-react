import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import banner from "../../assets/hero_banner.jpg";
import bannerTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCard from "../../components/titleCards/TitleCard";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={banner} className="banner-img" />
        <div className="hero-caption">
          <img src={bannerTitle} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from immortal
            enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className=" btn dark-btn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Top picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
