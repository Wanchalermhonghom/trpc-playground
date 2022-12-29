import { Button, Group, Header } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

const CustomHeader = () => {
  const { data: session } = useSession();
  return (
    <Header height={60} p="xs" className="flex flex-row justify-between">
      {session?.user?.name && <div>{"Hello " + session.user.name}</div>}

      <Group>
        <Button variant="subtle" color="dark" onClick={() => console.log(32)}>
          Data Display
        </Button>
        <Button variant="subtle" color="dark" onClick={() => console.log(32)}>
          Mutations
        </Button>
        <Button variant="subtle" color="dark" onClick={() => console.log(32)}>
          Import
        </Button>
        <Button variant="subtle" color="dark" onClick={() => signOut}>
          Log out
        </Button>
        <Button variant="subtle" color="dark" onClick={() => signIn()}>
          Log in
        </Button>
      </Group>
    </Header>
  );
};

export default CustomHeader;
