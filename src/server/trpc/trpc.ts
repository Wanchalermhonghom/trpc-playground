import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { type Context } from "./context";


/**
 * First: Create a tRPC instance 
 * Only one instance per app
 *  setup with request context
 */
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

//Second: Define a router
export const router = t.router;

/**
 * Unprotected procedure
 * Can be viewed as the equivalent of a REST endpoint
 **/
export const publicProcedure = t.procedure;

/**
 * Reusable middleware to ensure
 * users are logged in
 */
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

/**
 * Protected procedure
 * 
 **/
export const protectedProcedure = t.procedure.use(isAuthed);
