const SQUARE_BUILDER = /([\d]+)( |\u00a0)m²/gm; // Test space / non-breaking space

export const getSquareMeters = (name: string) =>
  name.match(SQUARE_BUILDER)?.[0] ?? "0 m2";
