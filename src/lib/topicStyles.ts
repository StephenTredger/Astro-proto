// Decorative per-topic badge styling — not part of the core design tokens, just a scannability aid.
// shortName is the compact display label used in badges, nav lists, and card titles — category.data.name
// is the fuller descriptive name used in page headings and metadata.
const TOPIC_STYLES: Record<string, { code: string; shortName: string; colorClass: string }> = {
  'ip-ratings-ingress-protection': { code: 'IP', shortName: 'IP ratings', colorClass: 'bg-lime-50 text-green-800' },
  'fire-safety-resistance': { code: 'FIRE', shortName: 'Fire resistance', colorClass: 'bg-lime-50 text-green-800' },
  'outdoor-weather-uv-resistance': { code: 'UV', shortName: 'Outdoor & UV', colorClass: 'bg-lime-50 text-green-800' },
  'materials-sustainability': { code: 'MAT', shortName: 'Materials', colorClass: 'bg-lime-50 text-green-800' },
  'fittings-installation': { code: 'FIT', shortName: 'Fittings & installation', colorClass: 'bg-lime-50 text-green-800' },
  'certification-compliance': { code: 'CERT', shortName: 'Certification', colorClass: 'bg-lime-50 text-green-800' },
};

export function getTopicStyle(slug: string) {
  return (
    TOPIC_STYLES[slug] ?? {
      code: slug.slice(0, 3).toUpperCase(),
      shortName: slug,
      colorClass: 'bg-background text-muted',
    }
  );
}
