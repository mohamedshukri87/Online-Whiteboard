// draw at position y

"use client";

import Boxes from "@/components/ui/box";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const BoxArray: number[] = new Array(2000).fill(0);

export default function BoxGrid() {
  const squareSize = 74;
  const [mouseDown, setMouseDown] = useState(false);
  const [cameraX, setcameraX] = useState(0);
  const [cameraY, setCameraY] = useState(0);
  const [lastCoordinates, setLastCoordinates] = useState([0, 0]);

  const handleMouseDown = (e: { clientX: number; clientY: number }) => {
    setMouseDown(true);
    setLastCoordinates([e.clientX, e.clientY]);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!mouseDown) return;
    const changeX = e.clientX - lastCoordinates[0];
    const changeY = e.clientY - lastCoordinates[1];
    setLastCoordinates([e.clientX, e.clientY]);
    setCameraY((prev) => prev - changeY * 0.08);
    setcameraX((prev) => prev - changeX * 0.1);
    if (
      Math.abs(cameraY / squareSize) > 1.5 ||
      Math.abs(cameraX / squareSize) > 0.001
    ) {
      setMouseDown(false);
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={() => {
        setMouseDown(false);
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="position relative">
        {BoxArray.map((_, index) => (
          <Boxes
            key={index}
            index={index}
            cameraY={cameraY}
            cameraX={cameraX}
            squareSize={squareSize}
          />
        ))}
      </div>
    </div>
  );
}
