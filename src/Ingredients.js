import React from "react";
import "./ingredients.css";

const HoverComp = () => {
  const data = [
    { item: "BreadTop", key: 1 },
    { item: "Salad", key: 2 },
    { item: "Cheese", key: 3 },
    { item: "Patty", key: 4 },
    { item: "Sauce", key: 5 },
    { item: "Cheese", key: 6 },
    { item: "BreadBottom", key: 7 },
  ];
  const handleMouseOver = () => {
    var whole = document.getElementById("whole");
    whole.style.height = "550px";
    whole.style.display = "flex";
    whole.style.flexDirection = "column";
    whole.style.justifyContent = "space-between";
  };

  const handleMouseLeave = () => {
    var whole = document.getElementById("whole");
    whole.style.height = "200px";
  };

  return (
    <div
      id="whole"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {data.map((d) => (
        <div id={d.item}>
          <div className="HiddenText">
            <p>{d.item}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverComp;
