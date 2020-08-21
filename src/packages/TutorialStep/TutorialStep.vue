<template>
  <intersect root-margin="-190px 0px 0px 0px" @enter="intersected = true" @leave="intersected = false">
    <div :class="intersectedClass" class="step-wrapper">
      <div class="step-container">
        <div class="step p-w-med p-e-xl p-n-lg p-s-lg">
          <main>
            <label class="step-label m-s-med">
              <!-- The name of the step -->
              <slot name="name">
                <!-- "Step #"-->
                <template v-if="!$slots.name && index">
                  Step {{ index }}
                </template>
              </slot>
            </label>

            <!-- The content of the step box -->
            <slot />
          </main>
        </div>

        <div class="step-aside">
          <!-- The content to put aside the step box (or below on mobile) -->
          <slot name="aside" />
        </div>
      </div>
    </div>
  </intersect>
</template>

<script>
import Intersect from 'vue-intersect';

// <img width="915" alt="Screen Shot 2020-08-20 at 7 26 00 PM" src="https://user-images.githubusercontent.com/611996/90838647-03776580-e31b-11ea-8e27-00bdcb700dbe.png">
export default {
  name: 'TutorialStep',

  components: {
    Intersect
  },

  data () {
    return {
      intersected: false,
      index: null
    };
  },

  computed: {
    intersectedClass() {
      return this.intersected ? 'step-intersected' : '';
    }
  },

  mounted() {
    let index = Array.prototype.indexOf.call(this.$el.parentNode.children, this.$el);
    this.index = index + 1;
  }
};
</script>
