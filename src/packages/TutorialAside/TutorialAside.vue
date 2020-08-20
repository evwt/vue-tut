<script>
export default {
  name: 'TutorialAside',

  props: ['steps', 'activeStep'],

  render (createElement) {
    return createElement(
      'div',
      [this.steps[this.activeStep - 1]]
    );
  }
};
</script>
