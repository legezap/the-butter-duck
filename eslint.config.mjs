import { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const coreWebVitals = require("eslint-config-next/core-web-vitals");

const config = [
  ...coreWebVitals,
  {
    settings: {
      next: {
        rootDir: __dirname,
      },
    },
  },
];

export default config;
