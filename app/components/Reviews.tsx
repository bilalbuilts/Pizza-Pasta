import { googleRating, reviews } from "@/lib/reviews";
import ReviewRow from "./ReviewRow";

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      <span className="text-line-strong">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export default function Reviews() {
  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half);

  return (
    <section id="reviews" className="overflow-hidden bg-surface py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Customer feedback
        </p>
        <h2 className="mt-1 text-center text-3xl font-bold sm:text-5xl">What our customers say</h2>

        <a
          href={googleRating.url}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-line-strong bg-page px-4 py-2 text-sm hover:border-yellow-400"
        >
          <span className="font-[family-name:var(--font-display)] text-xl font-bold">
            {googleRating.score}
          </span>
          <Stars count={4} />
          <span className="text-xs text-muted">{googleRating.count} Google reviews</span>
        </a>
      </div>

      <div className="mt-6">
        <ReviewRow items={rowA} direction="left" offset={0} />
        <ReviewRow items={rowB} direction="right" offset={2} />
      </div>

      <div className="mt-4 text-center">
        <a
          href={googleRating.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold text-neutral-950 hover:bg-yellow-300"
        >
          Read all reviews on Google
        </a>
      </div>
    </section>
  );
}
