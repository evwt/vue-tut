<template>
  <main v-if="loaded" class="vue-tut">
    <header v-if="$slots.eyebrow || $slots.title || $slots.intro || $slots.default" class="tutorial-header">
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

      <!-- Anything you want to put in the header. -->
      <slot />
    </header>

    <div class="sections">
      <!-- Should be a series of tutorial-section components -->
      <slot name="sections" />
    </div>
  </main>
</template>

<script>
import WebFontLoader from 'webfontloader';
import '../../style/reset.scss';
import '../../style/utilities.scss';
import '../../style/vue-tut.scss';
import '../../style/vue-tut-section.scss';
import '../../style/vue-tut-step.scss';
import '../../style/vue-tut-highlighter.scss';
import '../../style/vue-tut-anim.scss';
import '../../style/vue-tut-mobile.scss';

// <img width="915" alt="Screen Shot 2020-08-20 at 7 26 00 PM" src="https://user-images.githubusercontent.com/611996/90838647-03776580-e31b-11ea-8e27-00bdcb700dbe.png">
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
