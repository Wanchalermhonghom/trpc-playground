import { Button, Center } from "@mantine/core";
import { signIn } from "next-auth/react";
import LoginForm from "../components/LoginForm";

const login = () => {
  return (
    <Center>
    <LoginForm></LoginForm>
    </Center>
  );
};

export default login;
