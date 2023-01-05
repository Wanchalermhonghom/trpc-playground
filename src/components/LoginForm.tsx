import {
  Button,
  Card,
  Center,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { signIn } from "next-auth/react";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { string, z } from "zod";

const LoginForm = () => {
  const loginSchema = z.object({
    userName: string().min(3, "Username must be at least 3 characters"),
    password: string().min(1),
  });

  const { errors, onSubmit, getInputProps } = useForm({
    validate: zodResolver(loginSchema),
    validateInputOnChange: true,
  });

  return (
    <Card shadow="xs">
      <Stack spacing="lg" className="px-8">
        {/* top, right, left margins are negative – -1 * theme.spacing.xl */}
        <Divider my="xs" label="Login Page" labelPosition="center" />

        {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}

        {/* right, left margins are negative – -1 * theme.spacing.xl */}

        <form onSubmit={onSubmit((values) => console.log(values))}>
          <Stack spacing="md">
            <TextInput
              label="Username"
              placeholder="Username"
              {...getInputProps("userName")}
            />

            <PasswordInput
              placeholder="Password"
              label="Password"
              description="Password must include at least one letter, number and special character"
              withAsterisk
              {...getInputProps("password")}
            />
            <Button variant="outline" type="submit">
              Submit
            </Button>
          </Stack>
        </form>

        {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}
        <Center style={{ width: 400, height: 200 }}>
          <Stack>
            <Button
              variant="outline"
              onClick={() =>
                signIn("google", { callbackUrl: "http://localhost:3000/" })
              }
            >
              <Group>
                <Text fz="sm">Log In Google</Text>
                <FaGoogle />
              </Group>
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                signIn("discord", { callbackUrl: "http://localhost:3000/" })
              }
            >
              <Group>
                <Text fz="sm">Log In Discord</Text>
                <FaDiscord />
              </Group>
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Card>
  );
};

export default LoginForm;
