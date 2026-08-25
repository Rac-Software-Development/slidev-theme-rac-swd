import { defineConfig } from 'vite'
import Mark from 'markdown-it-mark'

export default defineConfig({
  slidev: {
    markdown: {
      /* markdown-exit options */
      markdownSetup(md) {
        /* custom markdown-exit plugins */
        md.use(Mark)
      },
    },
    /* options for other plugins */
  },
})
