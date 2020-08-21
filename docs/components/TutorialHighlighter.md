# TutorialHighlighter

Highlight lines of text with line numbers or regexes. <br><br> <img width="754" alt="Screen Shot 2020-08-21 at 5 57 48 PM" src="https://user-images.githubusercontent.com/611996/90941476-dd63cb00-e3d7-11ea-9213-111edb7570b3.png">

## Props

<!-- @vuese:TutorialHighlighter:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|highlightLines|Array of integers, strings (`'start:end'`) and/or regexes to highlight|`Array`|`false`|[]|
|text|The text to highlight|`String`|`true`|-|
|lang|Language to use for syntax highlighting <br><br> Select from this list: https://github.com/PrismJS/prism/tree/master/components <br><br> Note: Must be setup in the Tutorial component first|`String`|`false`|vue|

<!-- @vuese:TutorialHighlighter:props:end -->


