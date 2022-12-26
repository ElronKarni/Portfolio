import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div
        onClick={() =>
          window.open("https://www.linkedin.com/in/elron-karni-16a565226/")
        }
      >
        <BsLinkedin />
      </div>
      <div onClick={() => window.open("https://github.com/ElronKarni")}>
        <BsGithub />
      </div>
      <div onClick={() => window.open("https://twitter.com/ElronKarni")}>
        <BsTwitter />
      </div>
      <div
        onClick={() => window.open("https://www.instagram.com/elron_karni1/")}
      >
        <BsInstagram />
      </div>
      <div
        onClick={() =>
          window.open("https://www.facebook.com/profile.php?id=100000229616600")
        }
      >
        <FaFacebookF />
      </div>
    </div>
  );
}

export default SocialMedia;
