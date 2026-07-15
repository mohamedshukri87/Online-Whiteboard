"use client";
import { on } from "events";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { useActiveStore } from "../ui/store";
import CircleCanvas from "../ui/circle";

export default function SideBar() {

    const onHover = (e) => {
    e.currentTarget.style.backgroundColor = "#FF6347";
    };

    const onUnHover = (e) => {     
    e.currentTarget.style.backgroundColor = "#E5E7EB";
    };

    const panning = (e) => {
        useActiveStore.getState().changeState(2);


    };




    return (

        <><div className="w-20 h-75  absolute bottom-100 bg-gray-200 left-10 top-60 shadow-xl flex flex-col items-center justify-center">
        <div className="w-9/10 h-15  relative bottom-20" onClick={panning}>
          <BsFillHandIndexThumbFill color="black" size="30px" className="relative left-5 top-3"></BsFillHandIndexThumbFill>

        </div>


        <div className="w-9/10 h-15  relative bottom-15" onMouseOver={onHover} onMouseOut={onUnHover} onClick={() => useActiveStore.getState().changeState(1)}>
          <BsFillPencilFill color="black" size="30px" className="relative left-5 top-3"></BsFillPencilFill>

        </div>

      </div><div className="w-9/10 h-15  relative bottom-200 left-50 bg-black-500" onClick={panning}>
        <CircleCanvas x={100} y={100} size="big" color="white"></CircleCanvas>
        </div></>
    )

}
