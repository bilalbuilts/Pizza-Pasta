import { menu } from "@/lib/menu";

export default function MenuList({ categories }: { categories?: string[] }) {
  const groups = categories ? menu.filter((g) => categories.includes(g.category)) : menu;

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="mb-4 border-b border-yellow-400/40 pb-2 text-xl font-bold text-accent">
            {group.category}
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {group.items.map((item) => (
              <li key={item.name} className="rounded-xl bg-surface p-4">
                <p className="font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-subtle">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
