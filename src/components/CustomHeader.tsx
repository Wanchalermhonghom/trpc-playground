import { Button, Header } from "@mantine/core";

const CustomHeader = () => {
  return (
    <Header height={60} p="xs">
      <Button variant="subtle" color="dark" onClick={() => console.log(32)}>
        Data Display
      </Button>
      <Button variant="subtle" color="dark" onClick={() => console.log(32)}>
        Mutations
      </Button>
      <Button variant="subtle" color="dark"  onClick={() => console.log(32)}>
        Import
      </Button>
    </Header>
  );
};

export default CustomHeader;
