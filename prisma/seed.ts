import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';
import { Categories, Home, PrismaClient, User } from "@prisma/client";

export const users: Partial<User>[] = [];

export function createRandomUser(): Partial<User> {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    emailVerified: faker.date.past(),
    image: faker.name.firstName(),
  };
}

export function createRandomHome(): Partial<Home> {
  return {
    name: faker.name.firstName(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    categoryId: faker.datatype.uuid(),
  };
}

export function createAllCategories(): Partial<Categories> {
  // const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  // return {
  //   name: randomCategory
  // }
  return {};
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
