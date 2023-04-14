// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.tsx";
import * as $1 from "./routes/languages/index.tsx";
import * as $2 from "./routes/languages/rust/index.tsx";

const manifest = {
  routes: {
    "./routes/index.tsx": $0,
    "./routes/languages/index.tsx": $1,
    "./routes/languages/rust/index.tsx": $2,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
