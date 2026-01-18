"use client";
import { Button, Card, Field, Input, Stack } from "@chakra-ui/react";
import { useZoomStore } from "../ui/store";
export default function ZoomTab() {

  const zoom = useZoomStore((state) => state.zoom);
  
  return (
    <Card.Root
      width="240px"
      height="50px"
      bg="white"
      color="black"
      borderColor="gray.200"
      borderRadius="15px"
      className="relative bottom-30"
      position="relative"
      left="1200px"
    >
      <Card.Header className="no-select">
        <Card.Title className="absolute inset-0 flex items-center justify-center ">
          { Math.floor((zoom / 2)*100)+ "%"}
        </Card.Title>
        <svg width={250} height={250} className="relative bottom-4" onClick={() => useZoomStore.getState().increaseZoom()}>
          <image
            href="/plusSign.png"
            width={30}
            height={30}
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        
        <svg width={250} height={250} className="relative bottom-68 left-40 " onClick={() => useZoomStore.getState().decreaseZoom()}>
          <image
            href="/minus.png"
            width={30}
            height={30}
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </Card.Header>
    </Card.Root>
  );
}
