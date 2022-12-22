import { z } from "zod";

import { publicProcedure, router } from "../trpc";

export const homeRouter = router({
  getHomesByCategoryId: publicProcedure
    .input(
      z.object({
        categoryId: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.home.findMany({
        where: {
          categoryId: input.categoryId,
        }
      });
    }),
  createHome: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.categories.findMany();
  }),
});
