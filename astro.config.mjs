// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zeit.com.br",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Nunito",
        cssVariable: "--font-nunito",
        display: "swap",
      },
      {
        provider: fontProviders.google(),
        name: "Fragment Mono",
        cssVariable: "--font-fragment",
        display: "swap",
      },
    ],
  },
});
