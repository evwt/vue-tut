# VueTut

Easily build beautiful tutorials with Vue.

**📒  ⠀[Docs](https://evwt.github.io/vue-tut/)**
<br>
**🖥  ⠀[Tutorial/Demo](https://vn192.csb.app/)**

## Install

```bash
npm i vue-tut
```

## Setup

```js
import VueTut from 'vue-tut';
import 'vue-tut/dist/vue-tut.min.css';

// Select a tutorial theme
import 'vue-tut/dist/themes/vue.css';

// Select a code highlighting theme
import 'vue-tut/dist/code-themes/vue.css';

Vue.use(VueTut);
```

### Themes

#### Tutorial

`vue` or `azure`

#### Highlighting

<a href="https://github.com/PrismJS/prism-themes">prism-themes themes</a>
<br>
`a11y-dark` / `atom-dark` / `base16-ateliersulphurpool.light` / `cb` / `darcula` / `dracula` / `duotone-dark` / `duotone-earth` / `duotone-forest` / `duotone-light` / `duotone-sea` / `duotone-space` / `ghcolors` / `hopscotch` / `material-dark` / `material-light` / `material-oceanic` / `nord` / `pojoaque` / `shades-of-purple` / `synthwave84` / `vs` / `vsc-dark-plus` / `xonokai`
<br><br>
<a href="https://prismjs.com/">Official themes</a>
<br>
`coy` / `dark` / `funky` / `okaidia` / `prism` / `solarizedlight` / `tomorrow` / `twilight`
<br><br>
vue-tut themes
<br>
`vue`

### Languages

`abap` / `abnf` / `actionscript` / `ada` / `agda` / `al` / `antlr4` / `apacheconf` / `apl` / `applescript` / `aql` / `arduino` / `arff` / `asciidoc` / `asm6502` / `aspnet` / `autohotkey` / `autoit` / `bash` / `basic` / `batch` / `bbcode` / `bison` / `bnf` / `brainfuck` / `brightscript` / `bro` / `bsl` / `c` / `cil` / `clike` / `clojure` / `cmake` / `coffeescript` / `concurnas` / `core` / `cpp` / `crystal` / `csharp` / `csp` / `css-extras` / `css` / `cypher` / `d` / `dart` / `dax` / `dhall` / `diff` / `django` / `dns-zone-file` / `docker` / `ebnf` / `editorconfig` / `eiffel` / `ejs` / `elixir` / `elm` / `erb` / `erlang` / `etlua` / `excel-formula` / `factor` / `firestore-security-rules` / `flow` / `fortran` / `fsharp` / `ftl` / `gcode` / `gdscript` / `gedcom` / `gherkin` / `git` / `glsl` / `gml` / `go` / `graphql` / `groovy` / `haml` / `handlebars` / `haskell` / `haxe` / `hcl` / `hlsl` / `hpkp` / `hsts` / `http` / `ichigojam` / `icon` / `iecst` / `ignore` / `inform7` / `ini` / `io` / `j` / `java` / `javadoc` / `javadoclike` / `javascript` / `javastacktrace` / `jolie` / `jq` / `js-extras` / `js-templates` / `jsdoc` / `json` / `json5` / `jsonp` / `jsstacktrace` / `jsx` / `julia` / `keyman` / `kotlin` / `latex` / `latte` / `less` / `lilypond` / `liquid` / `lisp` / `livescript` / `llvm` / `lolcode` / `lua` / `makefile` / `markdown` / `markup-templating` / `markup` / `matlab` / `mel` / `mizar` / `mongodb` / `monkey` / `moonscript` / `n1ql` / `n4js` / `nand2tetris-hdl` / `naniscript` / `nasm` / `neon` / `nginx` / `nim` / `nix` / `nsis` / `objectivec` / `ocaml` / `opencl` / `oz` / `parigp` / `parser` / `pascal` / `pascaligo` / `pcaxis` / `peoplecode` / `perl` / `php-extras` / `php` / `phpdoc` / `plsql` / `powerquery` / `powershell` / `processing` / `prolog` / `properties` / `protobuf` / `pug` / `puppet` / `pure` / `purebasic` / `python` / `q` / `qml` / `qore` / `r` / `racket` / `reason` / `regex` / `renpy` / `rest` / `rip` / `roboconf` / `robotframework` / `ruby` / `rust` / `sas` / `sass` / `scala` / `scheme` / `scss` / `shell-session` / `smali` / `smalltalk` / `smarty` / `solidity` / `solution-file` / `soy` / `sparql` / `splunk-spl` / `sqf` / `sql` / `stan` / `stylus` / `swift` / `t4-cs` / `t4-templating` / `t4-vb` / `tap` / `tcl` / `textile` / `toml` / `tsx` / `tt2` / `turtle` / `twig` / `typescript` / `typoscript` / `unrealscript` / `vala` / `vbnet` / `velocity` / `verilog` / `vhdl` / `vim` / `visual-basic` / `vue` / `warpscript` / `wasm` / `wiki` / `xeora` / `xml-doc` / `xojo` / `xquery` / `yaml` / `yang` / `zig`

## Usage

```vue
<template>
  <tutorial>
    <tutorial-section>
      <tutorial-step slot="step">
        <p>...</p>
        <tutorial-highlighter slot="aside" :highlight-lines="[2]" :text="step1" title="file.txt" />
      </tutorial-step>

      <tutorial-step slot="step">
        <p>...</p>
        <tutorial-highlighter slot="aside" :highlight-lines="[/script/]" :text="step2" title="file.txt" />
      </tutorial-step>

      <tutorial-step slot="step">
        <p>...</p>
        <tutorial-highlighter slot="aside" :highlight-lines="['10:14']" :text="step3" title="file.txt" />
      </tutorial-step>
    </tutorial-section>
  </tutorial>
</template>

<script>
let step1 = `<template>
  <div id="app">My Vue SFC</div>
</template>`;

let step2 = `${step1}

<script>
export default {
}
<\/script>`;

let step3 = `${step2}

<style>
#app {
  padding: 10px;
}
</style>`;

export default {
  data() {
    return {
      step1,
      step2,
      step3
    };
  }
};
</script>
```

<a href="https://clvw9.csb.app/" target="_blank">Result</a>

## Examples

### Hello World
Theme: `vue`, Code Theme: `tomorrow`

<a href="https://czz5i.csb.app/" target="_blank"><img width="500" alt="Screen Shot 2020-08-20 at 6 00 39 PM" src="https://user-images.githubusercontent.com/611996/90835167-7b409280-e311-11ea-8e2d-5a685f46ad64.png"></a>


[![Edit zealous-grass-czz5i](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zealous-grass-czz5i?fontsize=14&hidenavigation=1&theme=light)

<hr>

### C# Tutorial
Theme: `azure`, Code Theme: `vs`

<a href="https://z3e3c.csb.app/" target="_blank"><img width="500" alt="Screen Shot 2020-08-20 at 6 59 28 PM" src="https://user-images.githubusercontent.com/611996/90942041-ac849580-e3d9-11ea-818c-a1d9bc82def1.png"></a>


Shows using a different language besides vue.

[![Edit zealous-grass-czz5i](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/spring-cdn-z3e3c?fontsize=14&hidenavigation=1&theme=light) [![Join the chat at https://gitter.im/vue-tut/community](https://badges.gitter.im/vue-tut/community.svg)](https://gitter.im/vue-tut/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


