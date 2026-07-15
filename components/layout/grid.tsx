// draw at position y

"use client";

import Boxes from "@/components/ui/squares";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect, useRef, use, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";
import { useHistoryStore, useZoomStore } from "../ui/store";
import { useActiveStore } from "../ui/store";
import { stat } from "fs";

const BoxArray: number[] = new Array(500).fill(0);

export default function BoxGrid() {
  const squareSize = 74;
  const [mouseDown, setMouseDown] = useState(false);
  const [cameraX, setcameraX] = useState(0);
  const [cameraY, setCameraY] = useState(0);
  const [lastCoordinates, setLastCoordinates] = useState([0, 0]);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [drawing, setDrawing] = useState(false);

  const zoom = useZoomStore((state) => state.zoom);
  const drawingAllowed = useActiveStore((state) => state.drawing);
  const moveHistory = useHistoryStore((state) => state.moveHistory);
  const drawingHistory = useHistoryStore((state) => state.drawingHistory);

    const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    BoxArray.forEach((_, index) => {
      const x = (index % 32) * 74 + (cameraX % 74) - 74;
      const y = Math.floor(index / 32) * 74 + (cameraY % 74) - 74;

      ctx.strokeRect(x, y, 74, 74);
    });

    for (let i = 0; i < useHistoryStore.getState().moveHistory.length; i++) {
      ctx?.beginPath();

      ctx?.moveTo((useHistoryStore.getState().moveHistory[i][0] / zoom) + (cameraX - useHistoryStore.getState().moveHistory[i][2]), ((useHistoryStore.getState().moveHistory[i][1] - 74) / zoom) + (cameraY - useHistoryStore.getState().moveHistory[i][3]));
      ctx?.lineTo((useHistoryStore.getState().drawingHistory[i][0] / zoom) + (cameraX - useHistoryStore.getState().moveHistory[i][2]), ((useHistoryStore.getState().drawingHistory[i][1] - 74) / zoom) + (cameraY - useHistoryStore.getState().moveHistory[i][3]));
      ctx?.stroke();
      ctx?.closePath();
    }



  }, [BoxArray, cameraX, cameraY, moveHistory, drawingHistory]);


  const handleMouseDown = (e: { clientX: number; clientY: number }) => {
    if(drawingAllowed){
            init(e);
    setDrawing(true);
      
    }
    else {

      
      setMouseDown(true);
      setLastCoordinates([e.clientX, e.clientY]);
    }
  };

  const init = (e: { [x: string]: SetStateAction<number> }) => {
      setPosX(e.clientX);
      setPosY(e.clientY);
    };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if(drawingAllowed){
       const canvas: HTMLCanvasElement = document?.getElementById(
            "canvas",
          ) as HTMLCanvasElement;
          if (drawing) {
            const ctx = canvas?.getContext("2d");
            ctx?.beginPath();
            useHistoryStore.getState().appendMoveHistory(posX, posY, cameraX, cameraY);
            useHistoryStore.getState().appendDrawingHistory(e.clientX, e.clientY);
            ctx?.moveTo(posX / zoom, (posY - 74) / zoom);
      
            ctx?.lineTo(e.clientX / zoom, (e.clientY - 74) / zoom);
            ctx?.stroke();
            ctx?.closePath();
      
            setPosX(e.clientX);
            setPosY(e.clientY);
          }
    }
    else{
      if (!mouseDown) return;
      const changeX = e.clientX - lastCoordinates[0];
      const changeY = e.clientY - lastCoordinates[1];
      setLastCoordinates([e.clientX, e.clientY]);
      setCameraY((prev) => prev + (changeY) );
      setcameraX((prev) => prev +  (changeX) );
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
      ref={canvasRef}
      width={2000}
      height={1000}
      id="canvas"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => drawingAllowed ? setDrawing(false) :  setMouseDown(false)}
      
    />
  );
}