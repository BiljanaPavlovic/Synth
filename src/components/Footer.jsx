/** @format */

import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <br />
      <a
        href="https://www.linkedin.com/in/biljana-pavlovic-29a0907b/"
        target="_blanc"
      >
        <img
          src="/Synth/img/soc-ico/linkedin.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="https://github.com/BiljanaPavlovic" target="_blanc">
        <img
          src="/Synth/img/soc-ico/github.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="https://www.instagram.com/biljana_pavlovic_111/" target="_blanc">
        <img
          src="/Synth/img/soc-ico/instagram.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="https://www.facebook.com/biljana.pavlovic1/" target="_blanc">
        <img
          src="/Synth/img/soc-ico/facebook.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="/Synth/img/BiljanaPavlovicCV.pdf" download>
        <img
          src="/Synth/img/soc-ico/DownloadCV.png"
          alt="Download CV"
          className="soc-ico"
        />
      </a>
      <li>
        <img
          src="/Synth/img/soc-ico/gmail.png"
          className="soc-ico"
          alt="soc-ico"
        />
        zabiljanupavlovic@gmail.com
      </li>

      <p> &copy; Made by Biljana Pavlovic 2021.</p>
    </div>
  );
}
