import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Pizza Pasta House Fawkner",
  description:
    "Pizza Pasta House serves delicious halal food in the heart of Fawkner. Dine-in, takeaway and delivery.",
};

const values = [
  { title: "100% Halal", text: "Every item on our menu is halal, so everyone can eat with confidence." },
  { title: "Made fresh", text: "Pizzas, pastas and kebabs prepared fresh for every order." },
  { title: "Local favourite", text: "Proudly serving the Fawkner community from Argyle Street." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold">
          About <span className="text-accent">Pizza Pasta House</span>
        </h1>
        <p className="mt-6 text-lg text-muted">
          Pizza Pasta House is located in the heart of Fawkner. We serve delicious halal
          food: pizza, pasta and kebabs, for dine-in, takeaway and delivery.
        </p>
        <p className="mt-4 text-subtle">
          Whether you&apos;re after a quick lunch, a family dinner or a late-night feed, we&apos;re
          here to serve something hot and satisfying at a great price.
        </p>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line p-6 text-center">
              <h2 className="text-xl font-bold text-accent">{v.title}</h2>
              <p className="mt-2 text-sm text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <Link
          href="/menu"
          className="inline-block rounded-full bg-yellow-400 px-8 py-3 font-bold text-neutral-950 hover:bg-yellow-300"
        >
          Explore the menu
        </Link>
      </section>
    </>
  );
}
