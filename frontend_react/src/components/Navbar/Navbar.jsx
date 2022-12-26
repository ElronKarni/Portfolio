import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { images } from "../../constants";
import MaterialUISwitch from "../UI/MUISwitch";
import "./Navbar.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {theme === "light" && <img src={images.logo} alt="logo" />}
        {theme === "dark" && <img src={images.blacklogo} alt="logo" />}
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonial", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <MaterialUISwitch onChange={toggleTheme} checked={theme === "dark"} />
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonial",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}

              {theme === "light" && (
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <BsLinkedin
                    color="darkcyan"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/elron-karni-16a565226/"
                      )
                    }
                  />
                  <BsGithub
                    color="darkcyan"
                    className="app__navbar-menu-social"
                    onClick={() => window.open("https://github.com/ElronKarni")}
                  />
                  <BsTwitter
                    color="darkcyan"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open("https://twitter.com/ElronKarni")
                    }
                  />
                  <BsInstagram
                    color="darkcyan"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open("https://www.instagram.com/elron_karni1/")
                    }
                  />

                  <FaFacebookF
                    color="darkcyan"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/profile.php?id=100000229616600"
                      )
                    }
                  />
                </span>
              )}
              {theme === "dark" && (
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <BsLinkedin
                    color="rgb(173, 172, 172)"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/elron-karni-16a565226/"
                      )
                    }
                  />
                  <BsGithub
                    color="rgb(173, 172, 172)"
                    className="app__navbar-menu-social"
                    onClick={() => window.open("https://github.com/ElronKarni")}
                  />
                  <BsTwitter
                    color="rgb(173, 172, 172)"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open("https://twitter.com/ElronKarni")
                    }
                  />
                  <BsInstagram
                    color="rgb(173, 172, 172)"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open("https://www.instagram.com/elron_karni1/")
                    }
                  />

                  <FaFacebookF
                    color="rgb(173, 172, 172)"
                    className="app__navbar-menu-social"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/profile.php?id=100000229616600"
                      )
                    }
                  />
                </span>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
