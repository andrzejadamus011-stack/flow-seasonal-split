type Variant = "split" | "bike" | "ski";

/**
 * FLOW wordmark. One logo, vertically split: left half winter blue,
 * right half summer green. Pure SVG so it stays crisp everywhere.
 */
export function FlowLogo({
  variant = "split",
  subtitle,
  className,
}: {
  variant?: Variant;
  subtitle?: string;
  className?: string;
}) {
  const id = `flow-${variant}-${subtitle ? subtitle.replace(/\s+/g, "-").toLowerCase() : "plain"}`;
  const blue = "oklch(0.48 0.14 250)";
  const green = "oklch(0.52 0.15 152)";

  const stops =
    variant === "split"
      ? [
          { o: "0%", c: blue },
          { o: "50%", c: blue },
          { o: "50%", c: green },
          { o: "100%", c: green },
        ]
      : variant === "ski"
        ? [
            { o: "0%", c: blue },
            { o: "100%", c: blue },
          ]
        : [
            { o: "0%", c: green },
            { o: "100%", c: green },
          ];

  return (
    <svg
      viewBox="0 0 360 108"
      role="img"
      aria-label={`FLOW${subtitle ? ` – ${subtitle}` : ""}`}
      className={className}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          {stops.map((s, i) => (
            <stop key={i} offset={s.o} stopColor={s.c} />
          ))}
        </linearGradient>
      </defs>

      {/* mark: two strokes — a piste line and a wheel arc */}
      <g fill="none" stroke={`url(#${id})`} strokeLinecap="round">
        <path d="M8 62 C 26 40, 34 40, 52 62" strokeWidth="7" />
        <path d="M8 78 C 26 56, 34 56, 52 78" strokeWidth="7" opacity="0.35" />
      </g>

      <text
        x="66"
        y="72"
        fill={`url(#${id})`}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "58px",
          letterSpacing: "-0.02em",
        }}
      >
        FLOW
      </text>

      {subtitle ? (
        <text
          x="68"
          y="93"
          fill="currentColor"
          opacity="0.62"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </text>
      ) : null}
    </svg>
  );
}
