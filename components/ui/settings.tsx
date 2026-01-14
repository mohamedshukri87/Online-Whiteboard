import { Button, Menu, Portal } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";

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
    <Menu.Root>
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
