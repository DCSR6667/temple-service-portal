// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import css from "./css/Footer.module.css";

const Footer = () => {
  return (
    <div className={"container-fluid  " + css["footer-box"]}>
      <div className="row p-3 border-bottom">
        <div className={"col-3 p-3 " + css["footer-col"]}>
          <h5>About the Temple</h5>
          <p>
            Our temple is dedicated to promoting spiritual growth and community
            service. We offer a peaceful and sacred space for worship,
            meditation, and connecting with the divine.
          </p>
        </div>

        <div className={"col-3 p-3  " + css["footer-col"]}>
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/home" className="text-light text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="/diety" className="text-light text-decoration-none">
                Deities
              </a>
            </li>
            <li>
              <a href="/events" className="text-light text-decoration-none">
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="/donations" className="text-light text-decoration-none">
                Donations
              </a>
            </li>
          </ul>
        </div>

        <div className={"col-3 p-3  " + css["footer-col"]}>
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Temple Street, City,
              Country
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +123 456 7890
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> temple@templemail.com
            </li>
          </ul>
        </div>

        <div className={"col-3 p-3  " + css["footer-col"]}>
          <h5>Follow Us</h5>
          <div>
            <a
              href="https://facebook.com"
              className="text-light me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              className="text-light me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              className="text-light me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://youtube.com"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="row  justify-content-center ">
        <div className={"col-3  p-3  " + css["footer-col"]}>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Temple Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
