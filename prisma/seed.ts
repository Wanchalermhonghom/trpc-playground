import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';
import { PrismaClient, User } from "@prisma/client";

export const users: Partial<User>[] = [];

export function createRandomUser(): Partial<User> {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    emailVerified: faker.date.past(),
    image: faker.name.firstName(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  users.push(createRandomUser());
});

const prisma = new PrismaClient();
async function main() {
  users.forEach(async (user) => {
    await prisma.user.create({
      data: user,
    });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
