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


<img width="995" alt="Screen Shot 2020-08-20 at 6 00 39 PM" src="https://user-images.githubusercontent.com/611996/90834109-12581b00-e30f-11ea-91b2-e46a6f7d3b65.png">

<iframe src="https://codesandbox.io/embed/zealous-grass-czz5i?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="zealous-grass-czz5i"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
   [![Edit zealous-grass-czz5i](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zealous-grass-czz5i?fontsize=14&hidenavigation=1&theme=dark)