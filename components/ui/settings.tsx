import { Button, Menu, Portal } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { useHistoryStore } from "@/components/ui/store";

type TabDetails = {
  identifier: ReactElement;
  data?:
    | {
        value: string;
        label: string;
        shortcut: string;
      }[]
    | undefined;
};
export default function SettingsBar(props: TabDetails) {
  console.log(props.data);

  const clearHistory = useHistoryStore((state) => state.clearHistory);

  const handleSelect = (details: { value: string }) => {
    switch (details.value) {
      case "clear-board":
        clearHistory();
        break;
      case "new-board":
        // same effect for now — wipes current strokes to start fresh
        clearHistory();
        break;
      default:
        break;
    }
  };

  const content = props.data ? (
    <Menu.Content bg="tomato">
      {props.data.map((tab) => (
        <Menu.Item key={tab.value} value={tab.value}>
          {tab.label} <Menu.ItemCommand>{tab.shortcut}</Menu.ItemCommand>
        </Menu.Item>
      ))}
    </Menu.Content>
  ) : (
    ""
  );

  return (
    <Menu.Root onSelect={handleSelect}>
      <Menu.Trigger asChild>
        <Button variant="solid" color="black" size="xs">
          {props.identifier}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>{content}</Menu.Positioner>
      </Portal>
    </Menu.Root>
  );

}
