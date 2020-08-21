<template>
  <prism-editor
    v-if="show"
    v-model="text"
    class="tutorial-highlighter prism-share-background"
    :highlight="highlighter"
    line-numbers />
</template>

<script>
import pWaitFor from 'p-wait-for';
import { PrismEditor } from 'vue-prism-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

// Highlight lines of text with line numbers or regexes.
// <br><br>
// <img width="754" alt="Screen Shot 2020-08-21 at 5 57 48 PM" src="https://user-images.githubusercontent.com/611996/90941476-dd63cb00-e3d7-11ea-9213-111edb7570b3.png">
export default {
  components: {
    PrismEditor
  },

  props: {
    // Array of integers, strings (`'start:end'`) and/or regexes to highlight
    highlightLines: {
      type: Array,
      default: () => []
    },
    // The text to highlight
    text: {
      type: String,
      required: true
    },
    // Language to use for syntax highlighting
    // <br><br>
    // Select from this list: https://github.com/PrismJS/prism/tree/master/components
    // <br><br>
    // Note: Must be setup in the Tutorial component first
    lang: {
      type: String,
      default: 'vue'
    }
  },

  data() {
    return {
      show: false
    };
  },

  mounted() {
    this.delayedMount();
  },

  methods: {
    shareBackground() {
      let editorPre = this.$el.querySelector('pre');

      if (editorPre) {
        editorPre.classList.add('language-');

        let sharedBgEls = [
          ...document.querySelectorAll('.prism-share-background')
        ];

        if (sharedBgEls.length) {
          for (const sharedBgEl of sharedBgEls) {
            let style = window.getComputedStyle(editorPre);
            sharedBgEl.style.backgroundColor = style.backgroundColor;
            sharedBgEl.style.color = style.color;
          }
        }
      }
    },

    highlight() {
      for (const highlightLine of this.highlightLines) {
        if (typeof highlightLine === 'string') {
          try {
            this.highlightLineRange(...highlightLine.split(':').map(m => parseInt(m)));
          } catch (error) {
            console.log('[VueTut] That highlight range appears invalid. It should be in the format start:end');
          }
        } else if (highlightLine instanceof RegExp) {
          this.highlightLineRegex(highlightLine);
        } else if (Number.isInteger(highlightLine)) {
          this.highlightLineNumber(highlightLine);
        }
      }
    },

    highlightLineRange(start, end) {
      for (let idx = start; idx <= end; idx++) {
        let line = this.$el.querySelector(`.prism-editor__line-number:nth-child(${idx + 1})`);
        if (!line) return;
        line.classList.add('highlight-line');
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
      let lang = this.lang;

      if (lang === 'vue') lang = 'markup';

      if (text && languages[lang]) {
        return highlight(text, languages[lang]);
      }

      return '';
    },

    // This is horrible
    async delayedMount() {
      let lang = this.lang;

      if (lang === 'vue') lang = 'markup';

      await pWaitFor(() => !!languages[lang]);
      this.show = true;
      await this.$nextTick();

      await pWaitFor(() => !!this.$el.querySelector);
      await pWaitFor(() => !!this.$el.querySelector('textarea'));
      await this.$nextTick();

      this.shareBackground();
      this.highlight();

      setTimeout(() => {
        this.shareBackground();
        this.highlight();
      }, 10);

      setTimeout(() => {
        this.shareBackground();
        this.highlight();
      }, 100);
    }
  }
};
</script>
