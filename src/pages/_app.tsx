import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import { AppShell, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomNavbar from "../components/CustomNavbar";
import { categoryStore } from "../store/store";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const selectedCategory = categoryStore((state) => state.selectedCategory);

  return (
    //Allows application to access session data from
    //everywhere in the app with the useSession hook
    <SessionProvider session={session}>
      <AppShell
        padding="md"
        navbar={<CustomNavbar categories={pageProps.categories}></CustomNavbar>}
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
        {/* Your application here */}
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
