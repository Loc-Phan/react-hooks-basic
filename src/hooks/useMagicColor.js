import { useEffect, useState, useRef } from "react";

useMagicColor.propTypes = {};

function randDomColor(currentColor) {
  const arrColor = ["green", "yellow", "red"];
  const currentIndex = arrColor.indexOf(currentColor);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  return arrColor[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const oldColor = useRef("transparent");
  useEffect(() => {
    const colorSetInterval = setInterval(() => {
      const newColor = randDomColor(oldColor.current);
      setColor(newColor);
      oldColor.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorSetInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
