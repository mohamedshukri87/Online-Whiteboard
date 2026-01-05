"use client"

import Boxes from "@/components/ui/box";
import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";


const BoxArray: number[] = new Array(1545).fill(0);


export default function BoxGrid() {

    const [x, setX] = useState(0);
    const [y, setY]  = useState(0);
    const [mouseUp , setMouseUp] = useState(false);
    const [camera, setCamera] = useState({ x: 0, y: 0 });



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

    console.log(mouseUp)
    if(mouseUp){
      console.log("Mouse up is true" , x,y);
    }
    


  return (
    
    <div className="overflow:hidden">
      <Grid templateColumns="repeat(34, 0fr)" gap="0">
        {BoxArray.map((_, index) => (
          <Boxes 
            index={index}
          />
        ))}
      </Grid>
    </div>
  );
}
