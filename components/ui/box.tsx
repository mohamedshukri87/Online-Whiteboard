import { Box } from "@chakra-ui/react";

type MakeBoxProps = { cameraX: number };

// rerender the lines every time the user inputs something

// if im starting at 213 px - i start at 200 as my screen 0 and move everything by 13

// cameraX is where the screen should start at 0.
function MakeBox({ cameraX }: MakeBoxProps) {

  const spacing = cameraX % 74;
  // 74 148 {213} 222
  console.log(spacing);
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
      top={-spacing} 


      ></Box>
  );
}

type BoxesProps = { index: number };

export default function Boxes({ index }: BoxesProps) {
  return <MakeBox cameraX={index} />;
}
