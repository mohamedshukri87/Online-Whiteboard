"use client";

import { AiOutlineMenu } from "react-icons/ai";

export default function SheetArea() {
const mouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
  event.currentTarget.style.background = "rgb(0,0,0)";
};

const mouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
  event.currentTarget.style.background = "";
};
  return (
    <div
      id="menu-bar"
      className="w-7.5 h-8"
      onMouseOver={(event) =>
        ((event.target as HTMLInputElement).style.background =
          "rgb((139, 35, 0)")
      }
      onMouseOut={(event) =>
        ((event.target as HTMLInputElement).style.background = "")
      }
    >
      <AiOutlineMenu size={30} color="white" />;
    </div>
  );
}
