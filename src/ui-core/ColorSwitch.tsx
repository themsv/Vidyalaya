import { Button, Group, Menu, useMantineColorScheme } from "@mantine/core";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";

const icons = {
  auto: <IconDeviceDesktop size={16} />,
  dark: <IconMoon size={16} />,
  light: <IconSun size={16} />,
};

function ColorSwitch() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Menu shadow="md" width={160}>
      <Menu.Target>
        <Button>
          <Group>
            {icons[colorScheme]}
            {colorScheme.toUpperCase()}
          </Group>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Theme</Menu.Label>
        <Menu.Item
          leftSection={icons["light"]}
          onClick={() => setColorScheme("light")}
        >
          Light
        </Menu.Item>
        <Menu.Item
          leftSection={icons["dark"]}
          onClick={() => setColorScheme("dark")}
        >
          Dark
        </Menu.Item>
        <Menu.Item
          leftSection={icons["auto"]}
          onClick={() => setColorScheme("auto")}
        >
          Auto
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ColorSwitch;
