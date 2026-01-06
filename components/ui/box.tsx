import { Box } from "@chakra-ui/react";

type MakeBoxProps = { x: number };

function MakeBox({ x }: MakeBoxProps) {
  if (x % 34 < 10 && x%34 > 24) {
    
    /*
    |.   |                 |      |
    |    |     VISIBLE     |      |
    |    |                 |      |
    |    |                 |      |
    */
    return null;
  }

  return (
    <Box
      p="9"
      borderWidth="1px"
      borderColor="grey"
      color="orange.400"
      opacity="0.4"
      bg="white"
      width="10px"
      translateX= "-300px"
    ></Box>
  );
}

type BoxesProps = { index: number };

export default function Boxes({ index }: BoxesProps) {
  return <MakeBox x={index} />;
}
