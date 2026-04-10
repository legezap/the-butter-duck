const basePath = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github" ? "/the-butter-duck" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}

export default basePath;
