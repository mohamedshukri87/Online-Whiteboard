"use client"

import Boxes from "@/components/ui/box";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";


const BoxArray: number[] = new Array(1545).fill(0);



export default function BoxGrid() {

    const [x, setX] = useState(0);
    const [y, setY]  = useState(0);
    const [mouseUp , setMouseUp] = useState(false);
    const [camera, setCamera] = useState({ x: 0, y: 0 });
    const yourRef = useRef(null)

    useEffect(() => {

      const grid = document.getElementById("grid");
      if(grid){
        grid.style.transform = "translateY(-30px)"
      }
    }, []);



    const handleMouseDown = (event: { clientX: any; clientY: any; }) => {
        setX(event.clientX);
        setY(event.clientY)
    }


    const handleMouseUp = (event: { clientX: any; clientY: any; }) => {
        //setX(x - event.clientX);
        //setY(y - event.clientY);

        setX(event.clientX -  x); 

        setY(event.clientY - y);

        setMouseUp(true);
    }



  return (
    
    <div >
      <Grid ref={yourRef} id="grid" key="grid"  templateColumns="repeat(34, 0fr)" gap="0">
        {BoxArray.map((_, index) => (
          <Boxes key={index}
            index={index}
          />
        ))}
      </Grid>
    </div>
  );
}
