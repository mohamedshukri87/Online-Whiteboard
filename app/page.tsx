import HeaderBox from "@/components/layout/header";
import BoxGrid from "@/components/layout/grid";

const BoxArray: number[] = new Array(545).fill(0);

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <HeaderBox />
      <div className="flex-1 overflow-hidden">
        <BoxGrid />
      </div>
    </div>
  );
}
