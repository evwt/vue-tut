<template>
  <prism-editor
    v-model="text"
    class="tutorial-highlighter"
    :highlight="highlighter"
    line-numbers />
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prism-themes/themes/prism-hopscotch.css';
// import '@/style/editor-theme-vue.scss';
// import '@/style/editor-theme-ghcolors.scss';
// Highlight lines of text with line numbers or regexes.
export default {
  components: {
    PrismEditor
  },

  props: {
    // Array of integers and/or regexes to highlight
    highlightLines: Array,
    // The text to highlight
    text: {
      type: String,
      required: true
    }
  },

  mounted() {
    this.shareBackground();
    this.highlight();
  },

  methods: {
    shareBackground() {
      let editorPre = this.$el.querySelector('pre');

      if (editorPre) {
        editorPre.classList.add('language-');

        let sharedBgEl = this.$el.closest('.prism-share-background');

        if (sharedBgEl) {
          let style = window.getComputedStyle(editorPre);
          sharedBgEl.style.backgroundColor = style.backgroundColor;
          sharedBgEl.style.color = style.color;
        }
      }
    },

    highlight() {
      for (const highlightLine of this.highlightLines) {
        if (highlightLine instanceof RegExp) {
          this.highlightLineRegex(highlightLine);
        } else if (Number.isInteger(highlightLine)) {
          this.highlightLineNumber(highlightLine);
        }
      }
    },

    highlightLineNumber(number) {
      let line = this.$el.querySelector(`.prism-editor__line-number:nth-child(${number + 1})`);
      if (!line) return;
      line.classList.add('highlight-line');
    },

    highlightLineRegex(highlightRegex) {
      let lines = this.text.split('\n').map((line, idx) => line.match(highlightRegex) && idx).filter(v => v);

      for (const line of lines) {
        let lineEl = this.$el.querySelector(`.prism-editor__line-number:nth-child(${line + 2})`);
        if (!lineEl) return;
        lineEl.classList.add('highlight-line');
      }
    },

    highlighter(text) {
      if (text && languages.html) {
        return highlight(text, languages.html);
      }

      return '';
    }
  }
};
</script>
