import React, { useState } from "react";

ColorBox.propTypes = {};

function getRandomColor() {
  const arrColor = ["green", "red", "yellow", "orange", "black"];
  const randomColor = Math.trunc(Math.random() * 5);
  return arrColor[randomColor];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("box-color") || "deeppink";
    console.log(initialColor);
    return initialColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
