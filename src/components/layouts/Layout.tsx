import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import CustomHeader from "../CustomHeader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      padding="md"
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
