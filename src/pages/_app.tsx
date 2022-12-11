import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    //Allows application to access session data from 
    //everywhere in the app with the useSession hook
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  );
};

export default trpc.withTRPC(MyApp);
