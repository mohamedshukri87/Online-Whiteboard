import { Box } from "@chakra-ui/react";

type BoxesProps = { 
  index: number,
  differenceY: number

 };


type MakeBoxProps = { cameraX: number };

// rerender the lines every time the user inputs something

// if im starting at 213 px - i start at 200 as my screen 0 and move everything by 13

// cameraX is where the screen should start at 0.
function MakeBox({ index, differenceY }: BoxesProps) {

  const ROWSIZE = 20;

  const rowPosition = index % ROWSIZE
  const colPosition = Math.floor(index / ROWSIZE) // 0 or 1 where horizontally we want to end up 0 but we're in index(74)
  // rowPosition - 
  const firstRow = Math.floor(differenceY / 74);
  const offsetY = -(differenceY % 74);

  

  const rowOffset = -rowPosition*74
  const colOffset = -colPosition*74



  console.log(firstRow);


  return (
    <Box
      p="9"
      borderWidth="1px"
      borderColor="grey"
      color="orange.400"
      opacity="0.4"
      bg="white"
      width="10px"
      position= "relative"
      right={rowOffset -74}
      top={-index*74 + (colPosition*74) + offsetY}
  
      ></Box>
  );
}


export default function Boxes({ index , differenceY}: BoxesProps) {
  return <MakeBox index={index} differenceY={differenceY} />;
}
