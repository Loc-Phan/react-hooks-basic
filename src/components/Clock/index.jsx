import React, { useEffect, useState } from "react";
import useClock from "../../hooks/useClock.js";

function Clock() {
  const { timeString } = useClock();
  return <p style={{ fonSize: "42px" }}>{timeString}</p>;
}

export default Clock;
