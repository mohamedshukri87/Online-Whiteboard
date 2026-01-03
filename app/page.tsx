import Image from "next/image";
import Demo from "@/components/ui/menu-bar";
import HeaderBox from "@/components/layout/header";
import Boxes from "@/components/ui/box";
import { Grid, GridItem } from "@chakra-ui/react";

const BoxArray: number[] = new Array(545).fill(0);
export default function Home() {
  return (
    <div>
      <HeaderBox></HeaderBox>
      <Grid templateColumns="repeat(34, 0fr)" gap="0">
        {BoxArray.map((_, index) => (
          <Boxes key={index} />
        ))}
      </Grid>
    </div>
  );
}
