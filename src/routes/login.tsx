import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@mantine/form";
import {
  Button,
  Group,
  Image,
  PasswordInput,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";
import { IconLogin } from "@tabler/icons-react";

export const Route = createFileRoute("/login")({
  component: Login,
});
const schema = yup.object().shape({
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password").required(),
});

function Login() {
  const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);
  console.log({ submittedValues });
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnBlur: true,
    initialValues: { email: "", password: "" },
    validate: yupResolver(schema),
  });

  return (
    <Group justify="space-evenly" py="lg">
      <Image
        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2763&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="School campus"
        h="360"
        w="420"
      />
      <form onSubmit={form.onSubmit(setSubmittedValues)}>
        <Stack align="stretch" justify="center" w={420}>
          <TextInput
            {...form.getInputProps("email")}
            key={form.key("email")}
            label="Email"
            placeholder="Email"
            required
          />
          <PasswordInput
            {...form.getInputProps("password")}
            key={form.key("password")}
            label="Password"
            placeholder="Your password"
            required
          />
          <Button type="submit" rightSection={<IconLogin />}>
            Login
          </Button>
        </Stack>
      </form>
    </Group>
  );
}
