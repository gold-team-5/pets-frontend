import React from "react";
import "./Footer.css";
import { MdSupervisorAccount, MdFavorite } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterCircle,
  AiOutlineMessage,
} from "react-icons/ai";
export default function Footer(props) {
  return (
    <footer class="footer-distributed">
      <div class="footer-right">
        <a href="#">
          <i class="fa fa-facebook">
            <AiFillLinkedin />
          </i>
        </a>
        <a href="#">
          <i class="fa fa-twitter">
            <AiFillGithub />
          </i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin">
            {" "}
            <AiFillFacebook />
          </i>
        </a>
        <a href="#">
          <i class="fa fa-github">
            {" "}
            <AiFillTwitterCircle />
          </i>
        </a>
        <a href="#">
          <i class="fa fa-github">
            {" "}
            <AiOutlineMessage />
          </i>
        </a>
        <a href="#">
          <i class="fa fa-github">
            {" "}
            <AiFillPhone />
          </i>
        </a>
      </div>
      <div class="footer-left">
        <p class="footer-links">
          <a class="link-1" href="/">
            Home
          </a>
          <a href="/Pets"> Pets</a>
          <a href="/Products"> Products</a>
          <a href="/Services"> Services</a>
          <a href="/AboutUS"> About-Us</a>
        </p>
      </div>
      <p id="copyRight">PETS HOUSE &copy; 2021</p>
    </footer>
  );
}