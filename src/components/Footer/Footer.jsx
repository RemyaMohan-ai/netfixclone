import React from 'react'
import "./Footer.css"
import youtube_icon from "../../assets/youtube_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import  twitter_icon from "../../assets/twitter_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relation </li>
        <li>Jobs</li>
        <li>Terms of Use </li>
        <li>Legal Notice</li>
        <li> Privacy </li>
        <li>Cookies Preferences</li>
        <li>Corporate Informatation</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">1997 -2024 Neflix inc</p>
    </div>
  )
}
import "./Footer.css"
export default Footer
