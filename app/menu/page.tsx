import type { Metadata } from "next";
import MenuCategories from "../components/MenuCategories";

export const metadata: Metadata = {
  title: "Menu | Pizza Pasta House Fawkner",
  description:
    "Halal pizzas, burgers, pasta, sandwiches, kebabs and sides at Pizza Pasta House, Fawkner.",
};

export default function MenuPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
      <h1 className="text-center text-4xl font-bold sm:text-6xl">
        Our <span className="text-accent">menu</span>
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
        Pizzas, burgers, pasta, sandwiches and more. All food is 100% halal. Dine-in, takeaway
        and delivery.
      </p>
      <div className="mt-14">
        <MenuCategories />
      </div>
    </section>
  );
}
