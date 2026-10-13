export type MenuCategory = {
  category: string;
  image: string;
  imageAlt: string;
  blurb: string;
  items: { name: string; desc: string }[];
};

export const menu: MenuCategory[] = [
  {
    category: "Pizzas",
    image: "/menu/pizza.jpg",
    imageAlt: "Freshly baked pizza on a chopping board",
    blurb: "Hand-topped halal pizzas baked hot, with classic and loaded favourites for every appetite.",
    items: [
      { name: "Margherita", desc: "Tomato base, mozzarella, oregano" },
      { name: "Pepperoni", desc: "Halal pepperoni, mozzarella, tomato base" },
      { name: "Meat Lovers", desc: "Halal beef, chicken, sausage and cheese" },
      { name: "BBQ Chicken", desc: "Chicken, onion, BBQ sauce, mozzarella" },
    ],
  },
  {
    category: "Burgers",
    image: "/menu/burger.jpg",
    imageAlt: "Burger with lettuce and tomato",
    blurb: "Juicy halal burgers stacked with fresh salad, melted cheese and tasty sauces.",
    items: [
      { name: "Classic Beef Burger", desc: "Beef patty, lettuce, tomato, cheese, sauce" },
      { name: "Chicken Burger", desc: "Crispy chicken, lettuce, mayo" },
      { name: "Cheeseburger", desc: "Beef patty with double cheese and pickles" },
    ],
  },
  {
    category: "Pasta",
    image: "/menu/pasta.jpg",
    imageAlt: "Bowl of pasta with sauce",
    blurb: "Big bowls of comfort: rich sauces, tender pasta and plenty of parmesan.",
    items: [
      { name: "Spaghetti Bolognese", desc: "Beef ragu with parmesan" },
      { name: "Creamy Carbonara", desc: "Creamy sauce, bacon-style strips, cracked pepper" },
      { name: "Chicken Alfredo", desc: "Chicken in a creamy parmesan sauce" },
    ],
  },
  {
    category: "Sandwiches",
    image: "/menu/sandwich.jpg",
    imageAlt: "Sandwich with meat, cheese and salad",
    blurb: "Fresh sandwiches layered with meats, cheese and crisp salad on toasted bread.",
    items: [
      { name: "Chicken Sandwich", desc: "Chicken, lettuce, tomato, mayo" },
      { name: "Ham & Cheese", desc: "Ham, cheese, tomato, lettuce" },
      { name: "Steak Sandwich", desc: "Grilled steak, onion, salad, sauce" },
    ],
  },
  {
    category: "Kebabs",
    image: "/menu/kebab.jpg",
    imageAlt: "Kebab wrap with sliced meat and salad",
    blurb: "Tender, seasoned meat wrapped with fresh salad and your choice of sauce.",
    items: [
      { name: "Chicken Kebab", desc: "Wrapped with salad and your choice of sauce" },
      { name: "Lamb Kebab", desc: "Wrapped with salad and your choice of sauce" },
      { name: "Mixed Kebab", desc: "Chicken and lamb, salad and sauce" },
    ],
  },
  {
    category: "Sides",
    image: "/menu/sides.jpg",
    imageAlt: "Basket of golden chips",
    blurb: "The perfect extras: hot, crispy and made to share.",
    items: [
      { name: "Chips", desc: "Hot and crispy" },
      { name: "Garlic Bread", desc: "Toasted with garlic butter" },
      { name: "Wedges", desc: "Seasoned potato wedges" },
    ],
  },
];
