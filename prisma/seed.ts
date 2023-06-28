import { seedData } from "./seedDb";

seedData()
  .then(() => {
    console.log("seeded 🌱");
  })
  .catch((e) => {
    console.error("error seeding 🌱");
    console.error(e);
  });