import { Button, Card } from "@mantine/core";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  return (
    <Card p="xl">
      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>Login</Card.Section>

      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}

      {/* right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>
        <form>
            Username
            Password
        </form>
      </Card.Section>

      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>
        <Button variant="subtle" onClick={() => signIn("google")}>
          Log In Google
        </Button>
        <Button variant="subtle" onClick={() => signIn("discord")}>
          Log In Discord
        </Button>
      </Card.Section>
    </Card>
  );
};

export default LoginForm;
