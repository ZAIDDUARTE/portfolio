import { AnimatedRule } from "@/components/ui/AnimatedRule";

type SectionLabelProps = {
  number: string;
  title: string;
  tone?: "ink" | "light";
};

export function SectionLabel({
  number,
  title,
  tone = "ink",
}: SectionLabelProps) {
  const isLight = tone === "light";

  return (
    <div>
      <p
        className={`type-eyebrow ${isLight ? "text-light/75" : "text-muted"}`}
      >
        {number} / {title}
      </p>
      <AnimatedRule
        className={`mt-4 max-w-[120px] ${isLight ? "bg-light/25" : "bg-border"}`}
      />
    </div>
  );
}

type MetaClusterProps = {
  items: { label: string; value: string }[];
  tone?: "ink" | "light";
  className?: string;
};

/** Small technical-dossier metadata. Keep to one cluster per visual area. */
export function MetaCluster({
  items,
  tone = "ink",
  className = "",
}: MetaClusterProps) {
  const isLight = tone === "light";

  return (
    <dl
      className={`type-meta flex flex-wrap gap-x-8 gap-y-3 ${
        isLight ? "text-light/60" : "text-muted"
      } ${className}`}
    >
      {items.map((item) => (
        <div key={item.label} className="flex gap-2">
          <dt>{item.label} /</dt>
          <dd className={isLight ? "text-light/85" : "text-ink"}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
