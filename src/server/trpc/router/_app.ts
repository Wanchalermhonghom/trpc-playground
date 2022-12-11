import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";


// combine all routers into one
export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
});


// export type definition of API
export type AppRouter = typeof appRouter;
