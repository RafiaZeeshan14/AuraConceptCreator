export const brands = [
  { name: "Fieldnote", detail: "DIGITAL", mark: "⌁" },
  { name: "Aster", detail: "STUDIO", mark: "✳" },
  { name: "Northline", detail: "OBJECTS", mark: "◒" },
  { name: "Forma", detail: "WORKS", mark: "▱" },
  { name: "Morrow", detail: "ATELIER", mark: "∞" },
  { name: "Common", detail: "GROUND", mark: "◌" },
] as const;

export const loopedBrands = [...brands, ...brands];

export type Brand = (typeof brands)[number];