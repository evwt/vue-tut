<template>
  <intersect root-margin="-190px 0px 0px 0px" @enter="intersected = true" @leave="intersected = false">
    <div :class="intersectedClass" class="step-wrapper">
      <div class="step-container">
        <div class="step p-w-med p-e-xl p-n-lg p-s-lg">
          <main>
            <label class="m-s-med">
              <slot name="name" />
              <template v-if="!$slots.name && index">
                Step {{ index }}
              </template>
            </label>

            <slot />
          </main>
        </div>

        <div class="step-aside">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </intersect>
</template>

<script>
import Intersect from 'vue-intersect';

export default {
  name: 'TutorialStep',

  components: {
    Intersect
  },

  data () {
    return {
      intersected: 'not-intersected',
      index: null
    };
  },

  computed: {
    intersectedClass() {
      return this.intersected ? 'intersected' : '';
    }
  },

  mounted() {
    let index = Array.prototype.indexOf.call(this.$el.parentNode.children, this.$el);
    this.index = index + 1;
  }
};
</script>
