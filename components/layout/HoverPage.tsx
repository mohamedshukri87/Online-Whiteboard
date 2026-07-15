"use client";

import HeaderBox from "@/components/layout/header";
import BoxGrid from "@/components/layout/grid";
import { useEffect } from "react";
import Canvas from "@/components/layout/canvas";
import { useHistoryStore } from "@/components/ui/store";

export default function HoverPage() {

  useEffect(() => {
    const raw = localStorage.getItem("whiteboard-history");
    if (raw) {
      const { moveHistory, drawingHistory } = JSON.parse(raw);
      useHistoryStore.setState({ moveHistory, drawingHistory });
    }
  }, []);

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