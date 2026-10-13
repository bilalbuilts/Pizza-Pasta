// Simple line icons, one per menu category. Drawn on a 24x24 grid, they take the
// surrounding text colour via currentColor.
const icons: Record<string, React.ReactNode> = {
  Pizzas: (
    <>
      <path d="M3 6.5c5.5-3 12.5-3 18 0L12 21 3 6.5z" />
      <path d="M4.5 9c4.5-2 10.5-2 15 0" />
      <circle cx="10" cy="11.5" r="1.2" />
      <circle cx="14" cy="12.5" r="1.2" />
      <circle cx="12" cy="16.5" r="1.1" />
    </>
  ),
  Burgers: (
    <>
      <path d="M4 10.5a8 6 0 0 1 16 0H4z" />
      <path d="M8 7.5h.01M12 6.5h.01M16 7.5h.01" />
      <path d="M3 13.5c1.5 1.5 3-1.5 4.5 0s3-1.5 4.5 0 3-1.5 4.5 0 3-1.5 4.5 0" />
      <path d="M3.5 16.5h17" />
      <path d="M4 19h16a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1z" />
    </>
  ),
  Pasta: (
    <>
      <path d="M3 12.5h18c0 4.5-4 8-9 8s-9-3.5-9-8z" />
      <path d="M7 12.5c-.5-3 2-3.5 1-6.5M11.5 12.5c-.5-3 2-4 1-8M16 12.5c-.5-3 1.5-3.5.5-6" />
    </>
  ),
  Sandwiches: (
    <>
      <path d="M5 5h14a2 2 0 0 1 2 2v1.5H3V7a2 2 0 0 1 2-2z" />
      <path d="M3 11.5c1.5 1.5 3-1.5 4.5 0s3-1.5 4.5 0 3-1.5 4.5 0 3-1.5 4.5 0" />
      <path d="M3 14.5h18" />
      <path d="M3 17h18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1z" />
    </>
  ),
  Kebabs: (
    <>
      <path d="M6 7h12l-2.5 14h-7L6 7z" />
      <path d="M7.5 7c0-2 2-3.5 4.5-3.5s4.5 1.5 4.5 3.5" />
      <path d="M7 11.5h10M8 16h8" />
      <path d="M9.5 3c1-1.2 4-1.2 5 0" />
    </>
  ),
  Sides: (
    <>
      <path d="M5.5 11h13l-1.3 10H6.8L5.5 11z" />
      <path d="M8 11V5M10.5 11V3M13.5 11V4M16 11V6" />
    </>
  ),
};

export default function CategoryIcon({
  name,
  size = 26,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const shape = icons[name];
  if (!shape) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {shape}
    </svg>
  );
}
