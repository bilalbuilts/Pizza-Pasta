import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { FacebookIcon, MailIcon, PhoneIcon, PinIcon } from "./ContactIcons";

// One text style and one icon size for every column so the footer reads as a unit.
// Column headings use the same condensed heading font as the rest of the site, in capitals.
const heading =
  "font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-ink";
const list = "mt-3 space-y-1.5";
const item = "flex items-start gap-3";
// Every footer link/detail gets exactly this text style (nothing inherited).
const link =
  "font-sans text-sm font-normal leading-5 tracking-normal normal-case text-muted transition hover:text-accent";
const icon = "shrink-0 text-accent";

export default function Footer() {
  return (
    // Same space above the content and below the copyright line (py-8 both sides).
    <footer className="border-t border-line bg-surface px-6 py-8 text-sm text-muted">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:flex lg:justify-between">
        <div>
          <Image
            src="/logo.png"
            alt="Pizza Pasta House"
            width={900}
            height={773}
            className="h-20 w-auto"
          />
          <p className="mt-2 max-w-sm font-sans text-sm font-normal leading-5 text-muted">
            Fresh halal pizza, pasta and kebabs for dine-in, takeaway and delivery, in the heart
            of Fawkner.
          </p>
        </div>

        <div>
          <p className={heading}>Pages</p>
          <ul className={list}>
            {navLinks.map((l) => (
              <li key={l.href} className={item}>
                <Link href={l.href} className={link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={heading}>Follow us</p>
          <ul className={list}>
            <li className={item}>
              <FacebookIcon size={20} className={icon} />
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Pizza Pasta House on Facebook"
                className={link}
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={heading}>Contact</p>
          <ul className={list}>
            <li className={item}>
              <PinIcon className={icon} />
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noreferrer"
                className={`${link} lg:whitespace-nowrap`}
              >
                {site.address}
              </a>
            </li>
            <li className={item}>
              <PhoneIcon className={icon} />
              <a href={`tel:${site.phoneLink}`} className={link}>
                {site.phoneDisplay}
              </a>
            </li>
            <li className={item}>
              <MailIcon className={icon} />
              <a href={`mailto:${site.email}`} className={`${link} break-all`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center text-xs leading-5 text-subtle">
        © 2026 Pizza Pasta House, Fawkner VIC
      </p>
    </footer>
  );
}
