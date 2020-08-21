# Tutorial

<img width="915" alt="90838647-03776580-e31b-11ea-8e27-00bdcb700dbe" src="https://user-images.githubusercontent.com/611996/90840195-f65c7580-e31e-11ea-893c-9f64ad753814.png">  The header slots are all optional. No tutorial header will displayed if you omit all of them.

## Props

<!-- @vuese:Tutorial:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|codeTheme|Color theme for the highlighter. <br><br> prism-themes themes - see previews here: https://github.com/PrismJS/prism-themes <br> `a11y-dark` / `atom-dark` / `base16-ateliersulphurpool.light` / `cb` / `darcula` / `dracula` / `duotone-dark` / `duotone-earth` / `duotone-forest` / `duotone-light` / `duotone-sea` / `duotone-space` / `ghcolors` / `hopscotch` / `material-dark` / `material-light` / `material-oceanic` / `nord` / `pojoaque` / `shades-of-purple` / `synthwave84` / `vs` / `vsc-dark-plus` / `xonokai` <br><br> Official themes - see previews here: https://prismjs.com/ <br> `coy` / `dark` / `funky` / `okaidia` / `prism` / `solarizedlight` / `tomorrow` / `twilight` <br><br> vue-tut themes `vue`|`String`|`false`|vue|

<!-- @vuese:Tutorial:props:end -->


## Slots

<!-- @vuese:Tutorial:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|eyebrow|Category/summary/group of the tutorial|-|
|title|The name of the tutorial|-|
|intro|Paragraph intro text under the title|-|
|default|Anything you want to put in the header.|-|
|sections|Should be a series of tutorial-section components|-|

<!-- @vuese:Tutorial:slots:end -->


