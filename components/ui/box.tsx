import { Box } from "@chakra-ui/react";

type BoxesProps = { 
  index: number,
  cameraY: number,
  cameraX: number,
  squareSize : number
 };




// cameraX is where the screen should start at 0.
function MakeBox({ index, cameraY , cameraX, squareSize}: BoxesProps) {

  const ROWSIZE = 22;

  const rowPosition = index % ROWSIZE
  const colPosition = Math.floor(index / ROWSIZE) 
  const firstCol = Math.floor(cameraX / 74);
  
  const offsetY = -Math.abs(cameraY % 74);
  const offsetX = -Math.abs(cameraX % 74);

  

  const rowOffset = -rowPosition*74
  const colOffset = -colPosition*74



  console.log("cameraX", cameraX, "cameraY", cameraY );



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
      right={rowOffset +74 + offsetX} // -74 takes the column RIGHT - 
      top={-index*74 + (colPosition*74) + offsetY}
  
      ></Box>
  );
}


export default function Boxes({ index , cameraY, cameraX, squareSize}: BoxesProps) {
  return <MakeBox index={index} cameraY={cameraY} cameraX={cameraX} squareSize={squareSize}/>;
}
