const basePath = process.env.NODE_ENV === "production" ? "/perduck-next" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}

export default basePath;
