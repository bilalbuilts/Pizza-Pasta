import type { Metadata } from "next";
import { site } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon } from "../components/ContactIcons";

export const metadata: Metadata = {
  title: "Contact | Pizza Pasta House Fawkner",
  description: `Find Pizza Pasta House at ${site.address}. Call ${site.phoneDisplay} to order.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-center text-4xl font-extrabold">
        Contact <span className="text-accent">us</span>
      </h1>
      <p className="mt-3 text-center text-muted">
        Call to order, ask a question, or drop in and say hello.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-neutral-950">
              <PinIcon />
            </span>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="pt-2 hover:text-accent hover:underline"
            >
              {site.address}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-neutral-950">
              <PhoneIcon />
            </span>
            <a className="hover:text-accent hover:underline" href={`tel:${site.phoneLink}`}>
              {site.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-neutral-950">
              <MailIcon />
            </span>
            <a
              className="break-all hover:text-accent hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
          <div>
            <h2 className="font-bold text-accent">Opening hours</h2>
            <p className="mt-1 text-muted">Please call for current opening hours.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-neutral-950 hover:bg-yellow-300"
            >
              Get directions
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line-strong px-6 py-3 font-semibold hover:border-yellow-400"
            >
              Facebook
            </a>
          </div>
        </div>

        <iframe
          title="Map to Pizza Pasta House"
          src={site.mapsEmbed}
          className="h-80 w-full rounded-2xl border-0 md:h-full md:min-h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
