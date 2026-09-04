import { copyFile } from "node:fs/promises";

await copyFile(
    new URL("../node_modules/alpinejs/dist/cdn.min.js", import.meta.url),
    new URL("../js/alpine.js", import.meta.url),
);
