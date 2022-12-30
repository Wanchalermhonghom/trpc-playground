import { Flex } from "@mantine/core";
import LoginForm from "../components/LoginForm";

const login = () => {
  return (
    <Flex className="h-screen bg-slate-100">
      <div className="m-auto">
        <LoginForm></LoginForm>
      </div>
    </Flex>
  );
};

export default login;
