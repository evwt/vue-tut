<template>
  <section>
    <header class="introduction">
      <h1 class="m-s-sm">
        <slot name="name" />
        <template v-if="!$slots.name && index">
          Section {{ index }}
        </template>
      </h1>
      <h2 class="m-s-med">
        <slot name="title" />
      </h2>
      <p>
        <slot name="intro" />
      </p>
    </header>

    <div class="steps d-flex">
      <div class="contents">
        <slot name="step" />
      </div>

      <div class="assets">
        <transition-group name="fade" tag="div" class="assets-inner">
          <tutorial-aside :key="activeStep" :active-step="activeStep" :steps="$slots.step" class="asset-images" />
        </transition-group>
        <!--
            <div v-if="activeStep === 1" :key="1">
              <div class="asset-images">
                <portal-target name="destination" />
              </div>
            </div>

            <div v-if="activeStep === 2" :key="2">
              <div class="asset-images">
              </div>
            </div>

            <div v-if="activeStep === 3" :key="3">
              <div class="asset-images">
              </div>
            </div>

            <div v-if="activeStep === 4" :key="4">
              <div class="asset-images">
              </div>
            </div>

            <highlighter
              v-if="activeStep === 5"
              :key="5"
              :highlight-lines="[4, 10, 15]"
              :code="''"
              class="asset-code" />

            <highlighter
              v-if="activeStep === 6"
              :key="6"
              :highlight-lines="[26, 27, 28]"
              :code="''"
              class="asset-code" />

            <div v-if="activeStep === 7" :key="7">
              <div class="asset-images">
              </div>
            </div>

            <div v-if="activeStep === 8" :key="8">
              <div class="asset-images">
              </div>
            </div> -->
        <!-- </transition-group> -->
      </div>
    </div>
  </section>
</template>

<script>
import debounce from 'lodash/debounce';
import { Portal, PortalTarget } from 'portal-vue';
import Highlighter from '../../components/Highlighter.vue';
import TutorialAside from '../TutorialAside';

export default {
  name: 'TutorialSection',

  components: {
    Highlighter,
    Portal,
    PortalTarget,
    TutorialAside
  },

  data() {
    return {
      activeStep: 1,
      index: null
    };
  },

  created() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 15);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  },

  mounted() {
    let index = Array.prototype.indexOf.call(this.$el.parentNode.children, this.$el);
    this.index = index + 1;
    console.log(this.$slots);
  },

  methods: {
    handleScroll() {
      let firstIntersected = this.$el.querySelector('.intersected');
      if (!firstIntersected) return;
      let index = Array.prototype.indexOf.call(firstIntersected.parentNode.children, firstIntersected);
      this.activeStep = index + 1;
    },

    isActiveStep(num) {
      if (this.activeStep === num) return true;
      return false;
    }

  }
};
</script>
