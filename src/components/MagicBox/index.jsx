import React from "react";
import "./index.scss";
import useMagicColor from "../../hooks/useMagicColor.js";

MagicBox.propTypes = {};

function MagicBox() {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
