import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';
import { PrismaClient, User } from "@prisma/client";
import { categories } from "@types/home";

export const users: Partial<User>[] = [];

export function createRandomUser(): Partial<User> {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    emailVerified: faker.date.past(),
    image: faker.name.firstName(),
  };
}

export function createRandomHome() {
  return {
    name: faker.name.firstName(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    image: faker.image.city(1234, 2345, true),
    price: parseInt(faker.commerce.price(100, 600)),
  };
}

// export function createAllCategoriesWithRanbdomHomes(): Partial<Categories> {
// categories.forEach((category) => {
//   return {
//     name: category,
//     homes: Array.from({ length: 10 }).map(() => createRandomHome()),
//   };
// }

// }

Array.from({ length: 10 }).forEach(() => {
  users.push(createRandomUser());
});

export const prisma = new PrismaClient();

async function main() {
  users.forEach(async (user) => {
    await prisma.user.create({
      data: user,
    });
  });

  categories.forEach(async (category) => {
    await prisma.category.create({
      data: {
        name: category,
        homes: {
          create: Array.from({ length: 10 }).map(() => createRandomHome()),
        },
      },
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
