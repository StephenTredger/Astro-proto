// Matches tags that look like a standards reference, e.g. "IEC 60529" or "BS EN 60529".
const STANDARD_REFERENCE_PATTERN = /^(IEC|EN|ISO|UL|DIN|BS|CSA)(\s+EN)?\s?\d/;

export function isStandardReference(tag: string): boolean {
  return STANDARD_REFERENCE_PATTERN.test(tag);
}
