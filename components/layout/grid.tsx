// draw at position y

"use client";

import Boxes from "@/components/ui/squares";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect, useRef, use } from "react";
import { Box } from "@chakra-ui/react";
import { useZoomStore } from "../ui/store";
import { stat } from "fs";

const BoxArray: number[] = new Array(2000).fill(0);

export default function BoxGrid() {
  const squareSize = 74;
  const [mouseDown, setMouseDown] = useState(false);
  const [cameraX, setcameraX] = useState(0);
  const [cameraY, setCameraY] = useState(0);
  const [lastCoordinates, setLastCoordinates] = useState([0, 0]);

  const zoom = useZoomStore((state) => state.zoom);

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

  const calculateZoom = (e: { ctrlKey: never; deltaY: number }) => {
    if (e.deltaY < 0) {
      if (useZoomStore.getState().zoom < 5) {
        useZoomStore.getState().increaseZoom();
      } else {
        useZoomStore.getState().maximumZoom();
      }
    } else {
      if (useZoomStore.getState().zoom > 0.899) {
        useZoomStore.getState().decreaseZoom();
      } else {
        useZoomStore.getState().minimumZoom();
      }
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => {
        setMouseDown(false);
      }}
      onWheel={calculateZoom}
    >
      <div className="position relative">
        <Box
          transform={`
            scale(${zoom})`}
          transformOrigin="0 0"
        >
          {BoxArray.map((_, index) => (
            <Boxes
              key={index}
              index={index}
              cameraY={cameraY}
              cameraX={cameraX}
              squareSize={squareSize}
            />
          ))}
        </Box>
      </div>
    </div>
  );
}
