import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    target: "es6",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        player: resolve(__dirname, "src/pages/player.html"),
        artists: resolve(__dirname, "src/pages/artists.html"),
        favorites: resolve(__dirname, "src/pages/favorites.html"),
        drake: resolve(__dirname, "src/pages/artists/drake.html"),
        beyonce: resolve(__dirname, "src/pages/artists/beyonce.html"),
        kendrickLamar: resolve(
          __dirname,
          "src/pages/artists/kendrick-lamar.html",
        ),
        duaLipa: resolve(__dirname, "src/pages/artists/dua-lipa.html"),
        theWeeknd: resolve(__dirname, "src/pages/artists/the-weeknd.html"),
        badBunny: resolve(__dirname, "src/pages/artists/bad-bunny.html"),
      },
    },
  },
  server: {
    host: true,
  },
});
