import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import CustomHeader from "../CustomHeader";
import CustomNavbar from "../CustomNavbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar ></CustomNavbar>}
      header={<CustomHeader></CustomHeader>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
