"use client";

import HeaderBox from "@/components/layout/header";
import BoxGrid from "@/components/layout/grid";
import { useEffect } from "react";
import Canvas from "@/components/layout/canvas";
export default function HoverPage() {

  
  return (
    <webview>
      <div className=" h-screen overflow-hidden flex flex-col ">
        <HeaderBox />
        <div className=" flex-1 overflow-hidden">
          <BoxGrid />
        </div>
      </div>
    </webview>
  );
}
