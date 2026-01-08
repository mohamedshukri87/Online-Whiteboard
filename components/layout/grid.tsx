// draw at position y

"use client";

import Boxes from "@/components/ui/box";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const BoxArray: number[] = new Array(1545).fill(0);

export default function BoxGrid() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [mouseDown, setMouseDown] = useState(false)
  const [differenceX, setDifferenceX] = useState(0);
  const [differenceY, setDifferenceY] = useState(0);

  const [mouseUp, setMouseUp] = useState(false);
  const [camera, setCamera] = useState({ x: 0, y: 0 });
  const yourRef = useRef(null);

  const lastY = useRef(0);
  

  const handleMouseDown = (e) => {
    setMouseDown(true);
    lastY.current = e.clientY;
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!mouseDown) return;

    const deltaY = e.clientY - lastY.current;
    lastY.current = e.clientY;

    setDifferenceY(prev => prev - (deltaY*0.2));

    if(differenceY / 74 > 1.5){
      setMouseDown(false);
    }
  };



  return (
    <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
      <div className="position relative" >
        {BoxArray.map((_, index) => (
          <Boxes key={index} index={index} differenceY={differenceY} />
        ))}
      </div>
    </div>
  );
}
