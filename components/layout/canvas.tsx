/*"use client";

import { SetStateAction, useEffect, useState } from "react";
import { useHistoryStore, useZoomStore, useActiveStore } from "../ui/store";

// next task: store every movement to session storage.
export default function Canvas() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [drawing, setDrawing] = useState(false);

  const zoom = useZoomStore((state) => state.zoom);
  const drawingAllowed = useActiveStore((state) => state.drawing);

  useEffect(() => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas",
    ) as HTMLCanvasElement;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  
  const mouseDown = (e: {
    offsetX: SetStateAction<number>;
    offsetY: SetStateAction<number>;
  }) => {
    init(e);
    setDrawing(true);
  };
  const mouseUp = () => {
    setDrawing(false);
  };

  const init = (e: { [x: string]: SetStateAction<number> }) => {
    setPosX(e.clientX);
    setPosY(e.clientY);
  };

  const mouseMove = (e: { clientX: number; clientY: number }) => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas",
    ) as HTMLCanvasElement;
    if (drawing) {
      const ctx = canvas.getContext("2d");
      ctx?.beginPath();
      useHistoryStore.getState().appendMoveHistory(posX, posY);
      useHistoryStore.getState().appendDrawingHistory(e.clientX, e.clientY);
      ctx?.moveTo(posX / zoom, (posY - 74) / zoom);

      ctx?.lineTo(e.clientX / zoom, (e.clientY - 74) / zoom);
      ctx?.stroke();
      ctx?.closePath();

      setPosX(e.clientX);
      setPosY(e.clientY);
    }
  };

  return (
    <canvas
      id="canvas"
      className={`fixed top-0 left-0 origin-top-left `}
      style={{
        transform: `translateY(${74}px) scale(${zoom})`,
        transformOrigin: "top left",
        pointerEvents: drawingAllowed ? "auto" : "none",
      }}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
    />
  );
}
*/