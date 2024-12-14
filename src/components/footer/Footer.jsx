import React from "react";
import "./footer.css";
import youtubeIcon from "../../assets/youtube_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={twitterIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={facebookIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
      </ul>
      <p className="copy-right-text">copy right 2025</p>
    </div>
  );
};

export default Footer;
