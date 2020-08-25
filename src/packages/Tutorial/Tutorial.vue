<template>
  <main v-if="loaded" class="vue-tut">
    <header v-if="$slots.eyebrow || $slots.title || $slots.intro" class="tutorial-header">
      <h1 class="m-s-sm">
        <!-- Category/summary/group of the tutorial that is placed above the title -->
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

export default {

  name: 'Tutorial',

  data() {
    return {
      loaded: false
    };
  },

  created() {
    WebFontLoader.load({
      google: { families: ['Source Sans Pro:300,400,600:latin'] },
      active() { this.loaded = true; }
    });

    setTimeout(() => {
      this.loaded = true;
    }, 300);
  }
};
</script>
