<template>
  <prism-editor
    v-model="text"
    class="tutorial-highlighter"
    :highlight="highlighter"
    line-numbers
    readonly />
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';

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
    for (const highlightLine of this.highlightLines) {
      if (highlightLine instanceof RegExp) {
        this.highlightLineRegex(highlightLine);
      } else if (Number.isInteger(highlightLine)) {
        this.highlightLineNumber(highlightLine);
      }
    }
  },

  methods: {
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
