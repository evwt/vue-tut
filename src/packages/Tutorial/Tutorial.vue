<template>
  <main v-if="loaded" class="vue-tut">
    <header v-if="$slots.eyebrow || $slots.title || $slots.intro" class="tutorial-header">
      <h1 class="m-s-sm">
        <!-- Category/summary/group of the tutorial -->
        <slot name="eyebrow" />
      </h1>
      <h2 class="m-s-xl">
        <!-- The name of the tutorial -->
        <slot name="title" />
      </h2>
      <p>
        <!-- Paragraph intro text under the title -->
        <slot name="intro" />
      </p>
    </header>

    <div class="sections">
      <!-- Should be a series of TutorialSection components -->
      <slot />
    </div>

    <footer class="tutorial-footer">
      <!-- Content to put below the tutorial -->
      <slot name="footer" />
    </footer>
  </main>
</template>

<script>
import WebFontLoader from 'webfontloader';
import '../../style/reset.scss';
import '../../style/utilities.scss';
import '../../style/prism-editor.scss';
import '../../style/vue-tut.scss';
import '../../style/vue-tut-section.scss';
import '../../style/vue-tut-step.scss';
import '../../style/vue-tut-highlighter.scss';
import '../../style/vue-tut-anim.scss';
import '../../style/vue-tut-mobile.scss';

// <img width="915" alt="90838647-03776580-e31b-11ea-8e27-00bdcb700dbe" src="https://user-images.githubusercontent.com/611996/90840195-f65c7580-e31e-11ea-893c-9f64ad753814.png">
// <br><br>
// Notes:
// <br>
// - The header slots are all optional. No tutorial header will displayed if you omit all of them.
// <br>
// - The footer slot is optional
export default {

  name: 'Tutorial',

  props: {
    // Color theme for the highlighter.
    // <br><br>
    // prism-themes themes - see previews here: https://github.com/PrismJS/prism-themes
    // <br>
    // `a11y-dark` / `atom-dark` / `base16-ateliersulphurpool.light` / `cb` / `darcula` / `dracula` / `duotone-dark` / `duotone-earth` / `duotone-forest` / `duotone-light` / `duotone-sea` / `duotone-space` / `ghcolors` / `hopscotch` / `material-dark` / `material-light` / `material-oceanic` / `nord` / `pojoaque` / `shades-of-purple` / `synthwave84` / `vs` / `vsc-dark-plus` / `xonokai`
    // <br><br>
    // Official themes - see previews here: https://prismjs.com/
    // <br>
    // `coy` / `dark` / `funky` / `okaidia` / `prism` / `solarizedlight` / `tomorrow` / `twilight`
    // <br><br>
    // vue-tut themes
    // `vue`
    codeTheme: {
      type: String,
      default: 'vue'
    },

    // Code languages to load for the highlighter.
    // <br><br>
    // Select from this list: https://github.com/PrismJS/prism/tree/master/components
    // <br><br>
    // Each TutorialHighlighter component will need a lang="" attribute that is one of these.

    codeLangs: {
      type: Array,
      default: ['clike', 'markup', 'javascript', 'css']
    }
  },

  data() {
    return {
      loaded: false
    };
  },

  created() {
    this.setLangs();

    WebFontLoader.load({
      google: { families: ['Source Sans Pro:300,400,600:latin'] },
      active() { this.loaded = true; }
    });

    setTimeout(() => {
      this.loaded = true;
    }, 300);

    this.setTheme();
  },

  methods: {
    async setLangs() {
      try {
        for (const lang of this.codeLangs) {
          await import('prismjs/components/prism-' + lang + '.js');
        }
      } catch (error) {
        console.log('[VueTut] Error loading one or more of your code-langs, is the name spelled correctly?');
      }
    },

    async setTheme() {
      if (this.codeTheme === 'vue') {
        import('@/style/editor-theme/vue.css');
      } else if ([
        'coy',
        'dark',
        'funky',
        'okaidia',
        'prism',
        'solarizedlight',
        'tomorrow',
        'twilight'
      ].includes(this.codeTheme)) {
        import(`prismjs/themes/prism-${this.codeTheme}.css`);
      } else if ([
        'a11y-dark',
        'atom-dark',
        'base16-ateliersulphurpool.light',
        'cb',
        'darcula',
        'dracula',
        'duotone-dark',
        'duotone-earth',
        'duotone-forest',
        'duotone-light',
        'duotone-sea',
        'duotone-space',
        'ghcolors',
        'hopscotch',
        'material-dark',
        'material-light',
        'material-oceanic',
        'nord',
        'pojoaque',
        'shades-of-purple',
        'synthwave84',
        'vs',
        'vsc-dark-plus',
        'xonokai'].includes(this.codeTheme)) {
        import(`prism-themes/themes/prism-${this.codeTheme}.css`);
      }
    }
  }
};
</script>
