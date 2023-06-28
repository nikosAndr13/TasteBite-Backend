import { encryptPassword } from "../src/auth-utils";
import { clearDb } from "./clearDb";
import { prisma } from './prisma-instance';

export async function seedData() {
  await clearDb();
  const john_doe = await prisma.user.create({
    data: {
      email: 'john@example.com',
      passwordHash: await encryptPassword('kj@LMuN!3570'),
      id: 1,
    }
  });
  const jane_Doe = await prisma.user.create({
    data: {
      email: 'jame@example.com',
      passwordHash: await encryptPassword('kj@LMuN!3576'),
      id: 2
    }
  })
  const isaih = await prisma.user.create({
    data: {
      email: 'Isaih@gmail.com',
      passwordHash: await encryptPassword('2014201420Ni!'),
      id: 3
    }
  });
  const nikos = await prisma.user.create({
    data: {
      email: 'nickos2014andriopoulos@gmail.com',
      passwordHash: await encryptPassword('2014201420Ni*'),
      id: 4
    }
  });
  const burger = await prisma.recipe.create({
    data: {
      title: "THE Burger",
      category: "gerghergeggerge",
      userId: 1,
      description: "A decent Burger",
      ingredients: "1 pound (450 grams) ground beef (80% lean, 20% fat)\n1 teaspoon salt\n1/2 teaspoon black pepper\n4 hamburger buns\n4 slices of cheese (cheddar, American, or your preferred type)\nLettuce leaves\nTomato slices\nOnion slices\nPickles (optional)\nKetchup, mustard, and mayonnaise (optional)\nCooking oil or non-stick cooking spray for the grill or pan",
      directions: "Preheat your grill or stovetop pan over medium-high heat.\nIn a mixing bowl, combine the ground beef, salt, and black pepper. Use your hands to gently mix the seasoning into the meat until well combined. Be careful not to overmix, as it can make the burgers tough.\n\nDivide the meat mixture into four equal portions and shape each portion into a patty about 1/2 to 3/4 inch (1.3 to 2 centimeters) thick. Use your thumb to create a small indentation in the center of each patty to help them cook evenly.\n\nLightly oil the grill grates or pan, or use non-stick cooking spray to prevent sticking. Place the burger patties on the hot grill or pan.\n\nCook the burgers for about 4-5 minutes on each side for medium doneness. If you prefer your burgers more or less cooked, adjust the cooking time accordingly. During the last minute of cooking, place a slice of cheese on top of each patty to melt.\n\nWhile the burgers are cooking, you can lightly toast the hamburger buns on the grill or in a separate pan if desired.\n\nOnce the burgers are cooked to your liking and the cheese is melted, remove them from the grill or pan and transfer them to a plate. Allow them to rest for a couple of minutes.\n\nAssemble your burgers by placing a patty on the bottom half of each bun. Top with lettuce, tomato slices, onion slices, pickles, and any other desired toppings. Spread ketchup, mustard, and mayonnaise on the top half of the buns.\n\nPlace the top bun on the assembled burger, and your delicious homemade burgers are ready to be enjoyed!",
      imageUrl: "/src/assets/burger.svg",
      id: 1
    }
  });
  const cheesecake = await prisma.recipe.create({
    data: {
      title: "Cheescake",
      category: "desserts",
      userId: 3,
      description: "Best Cheescake",
      ingredients: "For the crust\n400g graham crackers\n150g unsalted butters, melted\nFor the cheescake\n300g marshmallows\n175g unsalted butter, melted\n500g Philadelphia cream cheese, softened\n250ml thickened/whipping cream, warm\n3 tbsp powdered gelatin + 3 tbsp water\n5 drops purple food gel\n3 drops blue food gel",
      directions: "To prepare crust add graham crackers to a food\nprocessor and process until you reach fine crumbs. Add\nmelted butter and pulse 3-4 times to coat crumbs with\nbutter.\n\nPour mixture into a 20cm (8”) tart tin. Use the back of a\nspoon to firmly press the mixture out across the bottom\nand sides of the tart tin. Chill for 30 min.\n\nBegin by adding the marshmallows and melted butter\ninto a microwave safe bowl. Microwave for 30 seconds\nand mix to combine. Set aside.\n\nNext, add the gelatine and water to a small mixing bowl\nand mix to combine. Microwave for 30 seconds.\n\nAdd the cream cheese to the marshmallow mixture and\nuse a hand mixer or stand mixer fitted with a paddle\nattachment to mix until smooth.\nAdd the warm cream and melted gelatin mixture and\nmix until well combined.\n\nAdd 1/3 of the mixture to a mixing bowl, add purple\nfood gel and mix until well combined. Colour 1/3 of the\nmixture blue. Split the remaining mixture into two\nmixing bowls, colour one pink and leave the other\nwhite.\n\nPour half the purple cheesecake mixture into the chill\ntart crust. Add half the blue and then add the remaining\npurple and blue in the tart tin. Use a spoon to drizzle\nsome pink cheesecake on top. Use a skewer or the end\nof a spoon to swirl the pink. Add some small dots of the\nplain cheesecake mixture to create stars and then\nsprinkle some more starts on top before chilling for 2\nhours.\n\nSlice with a knife to serve.",
      imageUrl: "/src/assets/cheesake.svg",
      id: 2
    }
  });
  const pizza = await prisma.recipe.create({
    data: {
      title: "Pizza",
      category: "pizza",
      userId: 3,
      description: "Best Pizza Ever!",
      ingredients: "Pizza dough (store-bought or homemade)\nTomato sauce\nFresh mozzarella cheese\nFresh basil leaves\nExtra virgin olive oil\nSalt and pepper to taste",
      directions: "Preheat your oven to the highest temperature possible (usually around 475-500°F or 245-260°C).\n\nRoll out your pizza dough on a lightly floured surface to your desired thickness. If using store-bought dough, follow the package instructions for preparation.\n\nTransfer the rolled-out dough to a baking sheet or a pizza stone.\n\nSpread a thin layer of tomato sauce evenly over the dough, leaving a small border around the edges.\n\nTear or slice the fresh mozzarella into small pieces and distribute them evenly over the sauce.\n\nSeason with salt and pepper to taste.\n\nPlace the pizza in the preheated oven and bake for about 10-15 minutes, or until the crust is golden brown and the cheese has melted and started to bubble.\n\nWhile the pizza is baking, wash and dry the fresh basil leaves. Once the pizza is out of the oven, scatter the basil leaves on top.\n\nDrizzle some extra virgin olive oil over the pizza for added flavor.\n\nLet the pizza cool for a few minutes, then slice it and serve hot.",
      imageUrl: "/src/assets/pizza.svg",
      id: 3
    }
  });
  const breakfastBrunch = await prisma.recipe.create({
    data: {
      title: "BreakFast Brunch",
      category: "Breakfast",
      userId: 1,
      description: "Delicious Meal",
      ingredients: "4 slices of bacon\n4 large eggs\nSalt and pepper to taste\nButter or cooking oil for the pan\n4 slices of bread\nOptional toppings: grated cheese, chopped herbs (e.g., chives, parsley), sliced avocado, salsa",
      directions: "Cook the bacon in a skillet over medium heat until crispy. Remove the bacon from the pan and set it aside on a paper towel to drain excess grease.\n\nIn a bowl, crack the eggs and whisk them together until well beaten. Season with salt and pepper to taste.\n\nHeat the same skillet over medium-low heat and add a small amount of butter or cooking oil.\n\nPour the beaten eggs into the skillet and let them cook undisturbed for a few seconds until they start to set around the edges.\n\nUsing a spatula, gently scramble the eggs by pushing the cooked edges towards the center, allowing the uncooked eggs to flow to the edges.\n\nContinue to scramble the eggs until they are mostly cooked but still slightly runny. Remove the skillet from heat, as residual heat will continue to cook the eggs.\n\nWhile the eggs are cooking, toast the bread slices until golden brown.\n\nOnce the eggs are done, crumble the cooked bacon and mix it into the scrambled eggs.\n\nPlace the scrambled eggs and bacon mixture on top of the toasted bread slices.\n\nIf desired, add any optional toppings such as grated cheese, chopped herbs, sliced avocado, or salsa.\n\nServe the scrambled eggs with bacon on toast while still warm and enjoy your delicious breakfast!",
      imageUrl: "/src/assets/breakfast.svg",
      id: 4
    }
  });
  const vanillaIceCream = await prisma.recipe.create({
    data: {
      title: "Vanilla Ice Cream",
      category: "desserts",
      userId: 3,
      description: "Best Vanilla Ever",
      ingredients: "2 cups heavy cream\n1 cup whole milk\n3/4 cup granulated sugar\n1 tablespoon pure vanilla extract\nPinch of salt",
      directions: "In a mixing bowl, whisk together the heavy cream and sugar until the sugar is fully dissolved.\nAdd the milk, vanilla extract, and salt to the cream mixture. Whisk until well combined.\nCover the bowl and refrigerate the mixture for at least 2 hours, or overnight if possible. Chilling the mixture will improve the texture of the ice cream.\nOnce chilled, pour the mixture into an ice cream maker and churn according to the manufacturer's instructions.\nAfter churning, the ice cream will be soft. If you prefer a firmer consistency, transfer the ice cream to a lidded container and freeze it for a few hours until it reaches your desired consistency.\nServe the homemade vanilla ice cream in bowls or cones, and enjoy!",
      imageUrl: "/src/assets/deserts.svg",
      id: 5
    }
  });
  const garlicButterShrimp = await prisma.recipe.create({
    data: {
      title: "Garlic Butter Shrimp",
      category: "seafood",
      userId: 3,
      description: "Delicous Lunch",
      ingredients: "1 pound (450g) shrimp, peeled and deveined\n4 tablespoons unsalted butter\n4 cloves garlic, minced\n1 tablespoon fresh lemon juice\n1/4 teaspoon red pepper flakes (optional, for a spicy kick)\nSalt and black pepper to taste\n2 tablespoons fresh parsley, chopped\nLemon wedges, for serving\nInstructions:",
      directions: "In a large skillet, melt the butter over medium heat.\nAdd the minced garlic and red pepper flakes (if using) to the skillet and sauté for about 1 minute until the garlic becomes fragrant. Be careful not to burn it.\nAdd the shrimp to the skillet and season with salt and black pepper. Cook for 2-3 minutes, stirring occasionally until the shrimp turn pink and opaque.\nDrizzle the fresh lemon juice over the shrimp and sprinkle with chopped parsley. Toss everything together to ensure the shrimp are evenly coated.\nRemove the skillet from the heat and let the shrimp rest for a minute to absorb the flavors.\nServe the garlic butter shrimp immediately with lemon wedges on the side. It pairs well with rice, pasta, or a fresh salad.",
      imageUrl: "/src/assets/seafood.svg",
      id: 6
    }
  });
  const pasta = await prisma.category.create({
    data: {
      label: 'pasta',
      value: 'pasta',
      img: './src/assets/pastaCat.svg',
      isPopular: true,
    }
  });
  const pizzas = await prisma.category.create({
    data: {
      "label": "pizza",
      "value": "pizza",
      "img": "./src/assets/pizza.svg",
      "isPopular": true
    }
  });
  const vegan = await prisma.category.create({
    data: {
      "label": "vegan",
      "value": "vegan",
      "img": "./src/assets/vegan.svg",
      "isPopular": true
    },
  });
  const desserts = await prisma.category.create({
    data: {
      "label": "desserts",
      "value": "desserts",
      "img": "./src/assets/deserts.svg",
      "isPopular": true
    },
  });
  const smothies = await prisma.category.create({
    data: {
      "label": "smoothies",
      "value": "smoothies",
      "img": "./src/assets/smoothy.svg",
      "isPopular": true
    },
  });
  const seafood = await prisma.category.create({
    data: {
      "label": "seafood",
      "value": "seafood",
      "img": "./src/assets/seafood.svg",
      "isPopular": false
    },
  });
  const soup = await prisma.category.create({
    data: {
      "label": "soup",
      "value": "soup",
      "img": "./src/assets/soup.svg",
      "isPopular": false
    },
  });
  const pancake = await prisma.category.create({
    data: {
      "label": "pancakes",
      "value": "pancakes",
      "img": "./src/assets/pancakes.svg",
      "isPopular": false
    },
  });
  const meat = await prisma.category.create({
    data: {
      "label": "meat",
      "value": "meat",
      "img": "./src/assets/meat.svg",
      "isPopular": false
    },
  });
  const chicken = await prisma.category.create({
    data: {
      "label": "chicken",
      "value": "chicken",
      "img": "./src/assets/chicken.svg",
      "isPopular": false
    },
  });
  const fastRec = await prisma.category.create({
    data: {
      "label": "Less than 30 min",
      "value": "Less than 30 min",
      "img": "./src/assets/fast.svg",
      "isPopular": false
    },
  });
  const cake = await prisma.category.create({
    data: {
      "label": "Cake",
      "value": "Cake",
      "img": "./src/assets/cake.svg",
      "isPopular": false
    },
  });
  const breakFast = await prisma.category.create({
    data: {
      "label": "Breakfast",
      "value": "Breakfast",
      "img": "./src/assets/breakfast.svg",
      "isPopular": false
    }
  });
  const burgers = await prisma.category.create({
    data: {
      "label": "Burger",
      "value": "Burger",
      "img": "./src/assets/burger.svg",
      "isPopular": true
    },
  });
  const sandwiches = await prisma.category.create({
    data: {
      "label": "Sandwiches",
      "value": "Sandwiches",
      "img": "./src/assets/sandwiches.svg",
      "isPopular": true
    },
  });
  const donuts = await prisma.category.create({
    data: {
      "label": "Donuts",
      "value": "Donuts",
      "img": "./src/assets/donuts.svg",
      "isPopular": true
    }
  });
  const comment1 = await prisma.comment.create({
    data: {
      userId: 1,
      comment: 'Amazing',
      recipeId: 2,
      id: 1,
    }
  })
  const comment2 = await prisma.comment.create({
    data: {
      userId: 1,
      comment: 'Amazing!',
      recipeId: 2,
      id: 2,
    }
  })
  const comment3 = await prisma.comment.create({
    data: {
      userId: 1,
      comment: 'Food was delicious',
      recipeId: 2,
      id: 3,
    }
  })
  const comment4 = await prisma.comment.create({
    data: {
      userId: 2,
      comment: 'Perfection',
      recipeId: 4,
      id: 4,
    }
  })

}


