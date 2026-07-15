import { Box } from "@chakra-ui/react";
import SheetArea from "../ui/sheet";
import SettingsBar from "../ui/settings";
import { Settings } from "lucide-react";
import Profile from "../ui/avatar";
import { TfiSettings } from "react-icons/tfi";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

export default function HeaderBox() {
  return (
    <Box
      p="5"
      borderWidth="1px"
      borderColor="border.disabled"
      color="orange.400"
      bg="tomato"
      overflow="visible"
    >
      <SettingsBar
        identifier={<AiOutlineMenu />}
        data={[
          { value: "new-board", label: "New Board", shortcut: "CTRL+N" },
          { value: "clear-board", label: "Clear Board", shortcut: "CTRL+C" },
  
        ]}
      />
      <div className=" relative left-25 bottom-6 font-bold text-white text-xs h-0 ">
      </div>
      <div className="w-50 h-0 relative left-295 bottom-8.5">
        <Profile></Profile>
      </div>

      <div className="w-50 h-0 relative left-310 bottom-7.5">
        <SettingsBar identifier={<Settings />} />
      </div>

      <div className="w-50 h-0 relative left-325 bottom-7.5">
        <SettingsBar identifier={<BiHelpCircle />} />
      </div>
    </Box>
  );
}
