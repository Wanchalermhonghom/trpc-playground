import { router } from "../trpc";
import { authRouter } from "./authRouter";
import { exampleRouter } from "./example";
import { homeRouter } from "./homeRouter";


// combine all routers into one
export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  home: homeRouter,
});


// export type definition of API
export type AppRouter = typeof appRouter;
