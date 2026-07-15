import HoverPage from "@/components/layout/HoverPage";
import ZoomTab from "@/components/ui/ZoomTab";
import SideBar from "@/components/layout/SideBar";

export default function Home() {

  return (
    
    <div className="h-screen overflow-hidden flex flex-col relative">
        
        <HoverPage></HoverPage>
        <ZoomTab></ZoomTab>
        <SideBar></SideBar>
        </div>
  );
}