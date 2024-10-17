import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "/minimalBlogUsingTailwindcss/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				single: resolve(__dirname, "single.html"),
				tags: resolve(__dirname, "tags.html"),
				blog: resolve(__dirname, "blog.html"),
			},
		},
	},
});
