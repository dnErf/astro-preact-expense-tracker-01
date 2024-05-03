import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), db()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});