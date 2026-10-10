export const toSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const slugToSnakeCase = (slug: string) => slug.replace(/-/g, "_");

export const toCamelCase = (str: string) =>
  str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
