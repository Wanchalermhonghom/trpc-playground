import { Flex } from "@mantine/core";
import LoginForm from "../components/LoginForm";

const login = () => {
  return (
    <Flex className="h-screen bg-slate-100">
      <img src="/moonjpg.jpeg" alt="" className="absolute  h-full w-full " />
      <img src="/clouds.png" alt="" className="cloud-1 absolute" />
      <img src="/clouds.png" alt="" className=" cloud-2 absolute" />
      <div className="m-auto">
        <LoginForm></LoginForm>
      </div>
    </Flex>
  );
};

export default login;
