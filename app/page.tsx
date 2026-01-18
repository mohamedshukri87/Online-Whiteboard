import HoverPage from "@/components/layout/HoverPage";
import RemoveZoom from "@/hooks/removeZoom";
import ZoomTab from "@/components/ui/ZoomTab";

export default function Home() {

  return (
    <div>
        <RemoveZoom></RemoveZoom>
        <HoverPage></HoverPage>
        <ZoomTab></ZoomTab>
        </div>
  );
}
