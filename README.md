# vue-tut

Easily build beautiful tutorials to go along with your documentation.

```bash
vue create my-tutorial-site
npm i vue-tut
```

```vue
<template>
  <tutorial>
    ...
  </tutorial>
</template>

<script>
import { Tutorial } from 'vue-tut';

export default {
  components: {
    VueTut
  }
};
</script>
```