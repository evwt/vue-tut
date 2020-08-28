<template>
  <div
    class="prism-share-background w-100 h-100"
    :class="lineNumbers ? '': `no-line-numbers`">
    <div v-if="title" class="tutorial-highlighter-title">
      {{ title }}
    </div>
    <prism-editor
      ref="editor"
      v-model="text"
      class="tutorial-highlighter prism-share-background"
      :highlight="highlighter"
      line-numbers />
  </div>
</template>

<script>
/* eslint-disable max-len */
import { PrismEditor } from 'vue-prism-editor';
import { highlight, languages } from '@/vendor/prism';

export default {
  components: {
    PrismEditor
  },

  props: {
    // The text to highlight
    text: {
      type: String,
      required: true
    },
    // Array of integers, ranges (`'start:end'`) and/or regexes to highlight
    highlightLines: {
      type: Array,
      default: () => []
    },
    // Language to use for syntax highlighting
    // <br><br>
    // `abap` / `abnf` / `actionscript` / `ada` / `agda` / `al` / `antlr4` / `apacheconf` / `apl` / `applescript` / `aql` / `arduino` / `arff` / `asciidoc` / `asm6502` / `aspnet` / `autohotkey` / `autoit` / `bash` / `basic` / `batch` / `bbcode` / `bison` / `bnf` / `brainfuck` / `brightscript` / `bro` / `bsl` / `c` / `cil` / `clike` / `clojure` / `cmake` / `coffeescript` / `concurnas` / `core` / `cpp` / `crystal` / `csharp` / `csp` / `css-extras` / `css` / `cypher` / `d` / `dart` / `dax` / `dhall` / `diff` / `django` / `dns-zone-file` / `docker` / `ebnf` / `editorconfig` / `eiffel` / `ejs` / `elixir` / `elm` / `erb` / `erlang` / `etlua` / `excel-formula` / `factor` / `firestore-security-rules` / `flow` / `fortran` / `fsharp` / `ftl` / `gcode` / `gdscript` / `gedcom` / `gherkin` / `git` / `glsl` / `gml` / `go` / `graphql` / `groovy` / `haml` / `handlebars` / `haskell` / `haxe` / `hcl` / `hlsl` / `hpkp` / `hsts` / `http` / `ichigojam` / `icon` / `iecst` / `ignore` / `inform7` / `ini` / `io` / `j` / `java` / `javadoc` / `javadoclike` / `javascript` / `javastacktrace` / `jolie` / `jq` / `js-extras` / `js-templates` / `jsdoc` / `json` / `json5` / `jsonp` / `jsstacktrace` / `jsx` / `julia` / `keyman` / `kotlin` / `latex` / `latte` / `less` / `lilypond` / `liquid` / `lisp` / `livescript` / `llvm` / `lolcode` / `lua` / `makefile` / `markdown` / `markup-templating` / `markup` / `matlab` / `mel` / `mizar` / `mongodb` / `monkey` / `moonscript` / `n1ql` / `n4js` / `nand2tetris-hdl` / `naniscript` / `nasm` / `neon` / `nginx` / `nim` / `nix` / `nsis` / `objectivec` / `ocaml` / `opencl` / `oz` / `parigp` / `parser` / `pascal` / `pascaligo` / `pcaxis` / `peoplecode` / `perl` / `php-extras` / `php` / `phpdoc` / `plsql` / `powerquery` / `powershell` / `processing` / `prolog` / `properties` / `protobuf` / `pug` / `puppet` / `pure` / `purebasic` / `python` / `q` / `qml` / `qore` / `r` / `racket` / `reason` / `regex` / `renpy` / `rest` / `rip` / `roboconf` / `robotframework` / `ruby` / `rust` / `sas` / `sass` / `scala` / `scheme` / `scss` / `shell-session` / `smali` / `smalltalk` / `smarty` / `solidity` / `solution-file` / `soy` / `sparql` / `splunk-spl` / `sqf` / `sql` / `stan` / `stylus` / `swift` / `t4-cs` / `t4-templating` / `t4-vb` / `tap` / `tcl` / `textile` / `toml` / `tsx` / `tt2` / `turtle` / `twig` / `typescript` / `typoscript` / `unrealscript` / `vala` / `vbnet` / `velocity` / `verilog` / `vhdl` / `vim` / `visual-basic` / `vue` / `warpscript` / `wasm` / `wiki` / `xeora` / `xml-doc` / `xojo` / `xquery` / `yaml` / `yang` / `zig`
    lang: {
      type: String,
      default: 'vue'
    },
    // Title put above the highlighter for e.g. a filename
    title: {
      type: String
    },
    // Whether or not to display line numbers
    lineNumbers: {
      type: Boolean,
      default: true
    },
    // Automatically scroll to this line number when created
    scrollToLine: {
      type: Number
    }
  },

  async mounted() {
    this.shareBackground();
    this.highlight();

    if (this.scrollToLine) {
      let lineHeight = this.$el.querySelector('.prism-editor__line-number').offsetHeight;
      let paddingTop = parseInt(window.getComputedStyle(this.$refs.editor.$el, null).getPropertyValue('padding-top') || 0);
      let top = (this.scrollToLine * lineHeight) - paddingTop;
      this.$refs.editor.$el.scrollTo({ top });
    }
  },

  methods: {
    shareBackground() {
      let editorPre = this.$el.querySelector('pre');

      if (!editorPre) return;

      editorPre.classList.add('language-');

      let sharedBgEls = [
        ...document.querySelectorAll('.prism-share-background')
      ];

      if (!sharedBgEls.length) return;

      for (const sharedBgEl of sharedBgEls) {
        let style = window.getComputedStyle(editorPre);
        sharedBgEl.style.backgroundColor = style.backgroundColor;
        sharedBgEl.style.color = style.color;
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
    }
  }
};
</script>
