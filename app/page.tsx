import Link from "next/link";
import Image from "next/image";
import CategoryIcon from "./components/CategoryIcon";
import HeroSlider from "./components/HeroSlider";
import Reviews from "./components/Reviews";
import { menu } from "@/lib/menu";
import { site } from "@/lib/site";

const categories = [
  { emoji: "🍕", name: "Pizzas", note: "Stone-baked favourites" },
  { emoji: "🍝", name: "Pasta", note: "Hearty and creamy" },
  { emoji: "🌯", name: "Kebabs", note: "Loaded and wrapped" },
  { emoji: "🥖", name: "Sides", note: "Garlic bread and chips" },
];

const hunger = [
  {
    title: "Dine-in",
    text: "Take a seat and enjoy it fresh from the kitchen.",
    cta: "See the menu",
    href: "/menu",
  },
  {
    title: "Takeaway & delivery",
    text: "Call ahead for pick-up, or get it delivered hot around Fawkner.",
    cta: "Call to order",
    href: `tel:${site.phoneLink}`,
  },
  {
    title: "Group orders",
    text: "Feeding the family, the team or a party? Call us to arrange it.",
    cta: "Talk to us",
    href: "/contact",
  },
];

const promos = [
  {
    title: "The Pizza Classic",
    text: "Cheesy, golden and made fresh. Every pizza is 100% halal.",
    img: "/slides/hero-pizza.jpg",
  },
  {
    title: "Pasta Night",
    text: "Slow-cooked sauces and big bowls of comfort.",
    img: "/slides/hero-pasta.jpg",
  },
];

// Ticker shows the main menu categories (not individual dishes).
const marquee = menu.map((c) => c.category);

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Brand ticker */}
      <div className="overflow-hidden bg-yellow-400 py-3 text-neutral-950">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-bold uppercase">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((name, i) => (
            <span key={i} className="flex items-center gap-3">
              <CategoryIcon name={name} size={28} />
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Menu categories */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Our Signature
        </p>
        <h2 className="mt-2 text-center text-4xl font-bold sm:text-6xl">What are you craving?</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              href="/menu"
              className="group rounded-2xl border border-line bg-surface p-6 text-center transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-neutral-950"
            >
              <div className="text-5xl">{c.emoji}</div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold uppercase">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-subtle group-hover:text-neutral-800">{c.note}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Made for every kind of hunger */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold sm:text-6xl">
            Made for every kind of <span className="text-accent">hunger</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {hunger.map((h) => (
              <div
                key={h.title}
                className="flex flex-col rounded-2xl border border-line bg-page p-8"
              >
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-accent">
                  {h.title}
                </h3>
                <p className="mt-3 flex-1 text-muted">{h.text}</p>
                <a
                  href={h.href}
                  className="mt-6 inline-block self-start rounded-full bg-yellow-400 px-6 py-3 font-bold text-neutral-950 hover:bg-yellow-300"
                >
                  {h.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured promos */}
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        {promos.map((p) => (
          <Link
            key={p.title}
            href="/menu"
            className="group relative flex min-h-80 items-end overflow-hidden rounded-3xl"
          >
            <Image
              src={p.img}
              alt={p.title}
              fill
              unoptimized
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="relative p-8">
              <h2 className="text-4xl font-bold text-white">{p.title}</h2>
              <p className="mt-2 text-neutral-200">{p.text}</p>
              <span className="mt-4 inline-block rounded-full bg-yellow-400 px-6 py-2 font-bold text-neutral-950">
                Order now
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Customer feedback (above the Facebook follow strip) */}
      <Reviews />

      {/* Community */}
      <section className="bg-yellow-400 px-6 py-8 text-neutral-950">
        <div className="mx-auto grid max-w-6xl items-center gap-5 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em]">Join the community</p>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Follow us on Facebook</h2>
            <p className="mt-2 max-w-xl text-sm font-medium md:max-w-md">
              Daily specials, new menu items and the latest deals, straight from Pizza Pasta House.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 md:justify-end">
            <Image
              src="/logo.png"
              alt="Pizza Pasta House logo"
              width={900}
              height={773}
              className="h-auto w-24 drop-shadow-md"
            />
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-neutral-950 px-8 py-3 font-bold text-yellow-400 hover:bg-neutral-800"
            >
              Visit our page
            </a>
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
              Fresh, halal and loved in <span className="text-accent">Fawkner</span>.
            </h2>
            <p className="mt-4 max-w-xl text-muted">Find us at {site.address}.</p>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-8 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Hungry? Get in touch
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              {site.phoneDisplay}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={`tel:${site.phoneLink}`}
                className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-neutral-950 hover:bg-yellow-300"
              >
                Call now
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-line-strong px-8 py-3 font-semibold hover:border-yellow-400"
              >
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
