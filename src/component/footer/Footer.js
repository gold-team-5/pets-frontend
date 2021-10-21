import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "../reset.css"
import "./Footer.css";
// import Logo from "../Images/logo_white_vetrical.png";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerDIV">
          <div className="footerLogo">
            {/* <img src={Logo}></img> */}
          </div>
          <div className="technologies">
            <h2 className="footerH2">Technologies used</h2>
            <p className="footerP">React</p>
            <p className="footerP">Bootstrap</p>
            <p className="footerP">Express - axios</p>
            <p className="footerP">Mongoose - MongoDB</p>
            <p className="footerP">Coffee</p>
          </div>
          <div className="contactLinks">
            <h2 className="footerH2">Contact</h2>
            <p className="footerP">Email</p>
            <p className="footerP">Buy us a coffee</p>
            <p className="footerP">Donate for animal rights</p>
          </div>
          <div className="followLinks">
            <p className="footerP">
              <FaGithub />
            </p>
            <p className="footerP">
              <FaFacebookF />
            </p>
            <p className="footerP">
              <FaLinkedinIn />
            </p>
            <p className="footerP">
              <FaTwitter />
            </p>
          </div>
        </div>

        <div className="copyrightDivContainer">
          <div className="copyrightDiv">
            Copyright &copy; 2021 Poyal Pets - All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
