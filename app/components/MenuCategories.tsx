import Image from "next/image";
import { menu } from "@/lib/menu";

export default function MenuCategories() {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {menu.map((c) => (
        <article key={c.category} className="group text-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface shadow-sm ring-1 ring-line">
            <Image
              src={c.image}
              alt={c.imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold">{c.category}</h2>
          <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{c.blurb}</p>
        </article>
      ))}
    </div>
  );
}
