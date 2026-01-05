import { Box } from "@chakra-ui/react";


type MakeBoxProps = { x: number };

function MakeBox({ x }: MakeBoxProps) {

  console.log(x);
  if(x > 20){
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
    ></Box>
    )
}

type BoxesProps = { index: number };

export default function Boxes({ index }: BoxesProps) {
  return <MakeBox x={index} />;
}