export default function SectionBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block text-xs font-manrope font-semibold uppercase tracking-[0.14em] text-shock-blue mb-4 ${className}`}
    >
      {children}
    </span>
  );
}