import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import { useMantineTheme } from "@mantine/core";
import { useState } from "react";
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
      {/* Your application here */}

      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
