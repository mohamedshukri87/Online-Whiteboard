import HoverPage from "@/components/layout/HoverPage";
import RemoveZoom from "@/hooks/removeZoom";
import ZoomTab from "@/components/ui/ZoomTab";
import SideBar from "@/components/layout/SideBar";

export default function Home() {

  return (
    
    <div className="h-screen overflow-hidden flex flex-col relative">
        
        <RemoveZoom></RemoveZoom>
        <HoverPage></HoverPage>
        <ZoomTab></ZoomTab>
        <SideBar></SideBar>
        </div>
  );
}
