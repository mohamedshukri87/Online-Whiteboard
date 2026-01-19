"use client";

import {
  CanvasHTMLAttributes,
  DetailedHTMLProps,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function Canvas() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [drawing, setDrawing] = useState(false);

  useEffect( () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas",
    ) as HTMLCanvasElement;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight

  }, []

)
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

  const init = (e: {
    offsetX: SetStateAction<number>;
    offsetY: SetStateAction<number>;
  }) => {
    setPosX(e.clientX);
    setPosY(e.clientY);
  };

  const mouseMove = (
    e
  ) => {
 

    if (drawing && canvas != null) {
      const ctx = canvas.getContext("2d");
      ctx?.beginPath();
      ctx?.moveTo(posX, posY);
      ctx?.lineTo(e.clientX, e.clientY);
      ctx?.stroke();
      ctx?.closePath();


      setPosX(e.clientX);
      setPosY(e.clientY);
    }
  };

  return (
    <canvas
      id="canvas"
      className="fixed top-0 left-0 "
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
    ></canvas>
  );
}
