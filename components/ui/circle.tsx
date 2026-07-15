import React, { useRef, useEffect } from "react";

type CircleSize = "small" | "medium" | "big";

interface CircleProps {
  x: number;
  y: number;
  size: CircleSize;
  color?: string;
}

const CircleCanvas: React.FC<CircleProps> = ({ x, y, size, color = "black" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const radius = size === "small" ? 10 : size === "medium" ? 30 : 50;
    if (canvas && ctx) {

        ctx?.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

        ctx?.beginPath();
        ctx?.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx?.fill();
        ctx?.closePath();
    }
  }, [x, y, size, color]);

  return <canvas ref={canvasRef} width={200} height={200} color="black" />;
};

export default CircleCanvas;