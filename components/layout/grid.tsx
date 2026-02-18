// draw at position y

"use client";

import Boxes from "@/components/ui/squares";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect, useRef, use } from "react";
import { Box } from "@chakra-ui/react";
import { useZoomStore } from "../ui/store";
import { useActiveStore } from "../ui/store";
import { stat } from "fs";

const BoxArray: number[] = new Array(400).fill(0);

export default function BoxGrid() {
  const squareSize = 74;
  const [mouseDown, setMouseDown] = useState(false);
  const [cameraX, setcameraX] = useState(0);
  const [cameraY, setCameraY] = useState(0);
  const [lastCoordinates, setLastCoordinates] = useState([0, 0]);

  const zoom = useZoomStore((state) => state.zoom);
  const panningCounter= useActiveStore((state) => state.panningCounter);

  const ctx = document?.getElementById("canvas")?.getContext('2d');
  // canvasRef is undefined use ctx instead
  if(ctx){
  }
// useEffect(() => {
  //const ctx = canvasRef.current?.getContext('2d');
  //if (!ctx) return;

  //ctx.clearRect(0, 0, canvasRef?.current?.width, canvasRef?.current?.height);
 /// BoxArray.forEach((_, index) => {
   // const x = (index % 32) * 74 + cameraX;
  //  const y = (Math.floor(index / 32) * 74) + cameraY;
  //  ctx.strokeRect(x, y, 74, 74);
 // });
//}, panningCounter);

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

<canvas
  ref={(canvas) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    BoxArray.forEach((_, index) => {
      const x = (index % 32) * 74;
      const y = Math.floor(index / 32) * 74;

      ctx.strokeRect(x, y, 74, 74);
    });
  }}
/>

)}