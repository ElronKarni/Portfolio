import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const NavigationDots = ({ active }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <>
            {theme === "light" && (
              <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: "darkcyan" } : {}}
              />
            )}
            {theme === "dark" && (
              <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: "#414141" } : {}}
              />
            )}
          </>
        )
      )}
    </div>
  );
};

export default NavigationDots;
