# TutorialHighlighter

```
<tutorial>
  <tutorial-section>
    <tutorial-step>
      ...
      <tutorial-highlighter
        slot="aside"
        text="let foo = 'bar';"
        :highlight-lines="[1]"
        lang="javascript" />
    </tutorial-step>
  </tutorial-section>
</tutorial>
```

Highlight lines of text with line numbers or regexes.
## Props

<!-- @vuese:TutorialHighlighter:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|text|The text to highlight|`String`|`true`|-|
|highlightLines|Array of integers, ranges (`'start:end'`) and/or regexes to highlight|`Array`|`false`|[]|
|lang|Language to use for syntax highlighting <br><br> `abap` / `abnf` / `actionscript` / `ada` / `agda` / `al` / `antlr4` / `apacheconf` / `apl` / `applescript` / `aql` / `arduino` / `arff` / `asciidoc` / `asm6502` / `aspnet` / `autohotkey` / `autoit` / `bash` / `basic` / `batch` / `bbcode` / `bison` / `bnf` / `brainfuck` / `brightscript` / `bro` / `bsl` / `c` / `cil` / `clike` / `clojure` / `cmake` / `coffeescript` / `concurnas` / `core` / `cpp` / `crystal` / `csharp` / `csp` / `css-extras` / `css` / `cypher` / `d` / `dart` / `dax` / `dhall` / `diff` / `django` / `dns-zone-file` / `docker` / `ebnf` / `editorconfig` / `eiffel` / `ejs` / `elixir` / `elm` / `erb` / `erlang` / `etlua` / `excel-formula` / `factor` / `firestore-security-rules` / `flow` / `fortran` / `fsharp` / `ftl` / `gcode` / `gdscript` / `gedcom` / `gherkin` / `git` / `glsl` / `gml` / `go` / `graphql` / `groovy` / `haml` / `handlebars` / `haskell` / `haxe` / `hcl` / `hlsl` / `hpkp` / `hsts` / `http` / `ichigojam` / `icon` / `iecst` / `ignore` / `inform7` / `ini` / `io` / `j` / `java` / `javadoc` / `javadoclike` / `javascript` / `javastacktrace` / `jolie` / `jq` / `js-extras` / `js-templates` / `jsdoc` / `json` / `json5` / `jsonp` / `jsstacktrace` / `jsx` / `julia` / `keyman` / `kotlin` / `latex` / `latte` / `less` / `lilypond` / `liquid` / `lisp` / `livescript` / `llvm` / `lolcode` / `lua` / `makefile` / `markdown` / `markup-templating` / `markup` / `matlab` / `mel` / `mizar` / `mongodb` / `monkey` / `moonscript` / `n1ql` / `n4js` / `nand2tetris-hdl` / `naniscript` / `nasm` / `neon` / `nginx` / `nim` / `nix` / `nsis` / `objectivec` / `ocaml` / `opencl` / `oz` / `parigp` / `parser` / `pascal` / `pascaligo` / `pcaxis` / `peoplecode` / `perl` / `php-extras` / `php` / `phpdoc` / `plsql` / `powerquery` / `powershell` / `processing` / `prolog` / `properties` / `protobuf` / `pug` / `puppet` / `pure` / `purebasic` / `python` / `q` / `qml` / `qore` / `r` / `racket` / `reason` / `regex` / `renpy` / `rest` / `rip` / `roboconf` / `robotframework` / `ruby` / `rust` / `sas` / `sass` / `scala` / `scheme` / `scss` / `shell-session` / `smali` / `smalltalk` / `smarty` / `solidity` / `solution-file` / `soy` / `sparql` / `splunk-spl` / `sqf` / `sql` / `stan` / `stylus` / `swift` / `t4-cs` / `t4-templating` / `t4-vb` / `tap` / `tcl` / `textile` / `toml` / `tsx` / `tt2` / `turtle` / `twig` / `typescript` / `typoscript` / `unrealscript` / `vala` / `vbnet` / `velocity` / `verilog` / `vhdl` / `vim` / `visual-basic` / `vue` / `warpscript` / `wasm` / `wiki` / `xeora` / `xml-doc` / `xojo` / `xquery` / `yaml` / `yang` / `zig`|`String`|`false`|vue|
|title|Title put above the highlighter for e.g. a filename|`String`|`false`|-|
|lineNumbers|Whether or not to display line numbers|`Boolean`|`false`|true|
|scrollToLine|Automatically scroll to this line number when created|`Number`|`false`|-|

<!-- @vuese:TutorialHighlighter:props:end -->


