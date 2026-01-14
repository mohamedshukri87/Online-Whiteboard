import { Avatar, HStack } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Avatar.Root colorPalette="orange">
      <Avatar.Fallback name="Test Test" />
    </Avatar.Root>
  );
}
