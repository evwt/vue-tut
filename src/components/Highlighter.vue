<template>
  <prism-editor
    v-model="code"
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

export default {
  components: {
    PrismEditor
  },

  props: {
    highlightLines: Array,
    code: String
  },

  mounted() {
    for (const highlightLine of this.highlightLines) {
      let line = this.$el.querySelector(`.prism-editor__line-number:nth-child(${highlightLine + 1})`);
      if (!line) return;
      line.classList.add('highlight-line');
    }
  },

  methods: {
    highlighter(code) {
      if (code && languages.html) {
        return highlight(code, languages.html);
      }

      return '';
    }
  }
};
</script>
