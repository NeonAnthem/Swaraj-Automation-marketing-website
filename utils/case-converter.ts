export const toSnakeCase = (str: string) =>
  str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();

export const slugToSnakeCase = (slug: string) => slug.replace(/-/g, "_");

export const toCamelCase = (str: string) =>
  str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
