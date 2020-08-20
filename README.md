# vue-tut

Easily build beautiful tutorials with Vue.

## Install

```bash
npm i vue-tut
```

## Setup

```js
import VueTut from 'vue-tut';
import 'vue-tut/dist/vue-tut.min.css';
// Try one of these themes, or neither
// import 'vue-tut/dist/themes/vue.css';
// import 'vue-tut/dist/themes/azure.css';

Vue.use(VueTut);
```

## Usage

```vue
<template>
  <tutorial>
    <div slot="sections">
      <tutorial-section>
        <div slot="title">
          Hello World
        </div>

        <tutorial-step slot="step">
          <p>
            Add the HelloWorld component to App.vue
          </p>

          <aside slot="aside">
            <tutorial-highlighter :text="hello1" :highlight-lines="[4, 14]" />
          </aside>
        </tutorial-step>

        <tutorial-step slot="step">
          <p>
            Add some style
          </p>

          <aside slot="aside">
            <tutorial-highlighter :text="hello2" :highlight-lines="[/font/]" />
          </aside>
        </tutorial-step>
      </tutorial-section>
    </div>
  </tutorial>
</template>

<script>
import hello1 from '@/assets/hello1';
import hello2 from '@/assets/hello2';

export default {
  data() {
    return {
      hello1,
      hello2
    };
  }
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
</style>
```