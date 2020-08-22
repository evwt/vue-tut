# VueTut

Easily build beautiful tutorials with Vue.

**📒  ⠀[Docs](https://evwt.github.io/vue-tut/)**
<br>
**🖥  ⠀[Demo](https://g4si3.csb.app/)**

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
        <tutorial-step slot="step">
          <p>...</p>
          <tutorial-highlighter slot="aside" :highlight-lines="[2]" :text="step1" />
        </tutorial-step>

        <tutorial-step slot="step">
          <p>...</p>
          <tutorial-highlighter slot="aside" :highlight-lines="[/script/]" :text="step2" />
        </tutorial-step>

        <tutorial-step slot="step">
          <p>...</p>
          <tutorial-highlighter slot="aside" :highlight-lines="['10:14']" :text="step3" />
        </tutorial-step>
      </tutorial-section>
    </div>
  </tutorial>
</template>

<script>
let step1 = `<template>
  <div id="app">My Vue SFC</div>
</template>`;

let step2 = `${step1}

<script>
export default {
}
<\/script>`;

let step3 = `${step2}

<style>
#app {
  padding: 10px;
}
</style>`;

export default {
  data() {
    return {
      step1,
      step2,
      step3
    };
  }
};
</script>
```

<a href="https://vn192.csb.app/" target="_blank">Result</a>

## Examples

<a href="https://czz5i.csb.app/" target="_blank"><img width="500" alt="Screen Shot 2020-08-20 at 6 00 39 PM" src="https://user-images.githubusercontent.com/611996/90835167-7b409280-e311-11ea-8e2d-5a685f46ad64.png"></a>

**Hello World** - _Theme: Vue_

[![Edit zealous-grass-czz5i](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zealous-grass-czz5i?fontsize=14&hidenavigation=1&theme=light)

<hr>

<a href="https://g4si3.csb.app/" target="_blank"><img width="500" alt="Screen Shot 2020-08-20 at 6 59 28 PM" src="https://user-images.githubusercontent.com/611996/90837317-4f281000-e317-11ea-9d7a-d2286ece835c.png"></a>

**All Slots** - _Theme: Azure_

[![Edit zealous-grass-czz5i](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/determined-robinson-g4si3?fontsize=14&hidenavigation=1&theme=light)

<hr>

<a href="https://z3e3c.csb.app/" target="_blank"><img width="500" alt="Screen Shot 2020-08-20 at 6 59 28 PM" src="https://user-images.githubusercontent.com/611996/90942041-ac849580-e3d9-11ea-818c-a1d9bc82def1.png"></a>

**Example C# Tutorial** - _Theme: Azure_

Shows using a different language besides vue.

[![Edit zealous-grass-czz5i](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/spring-cdn-z3e3c?fontsize=14&hidenavigation=1&theme=light)


