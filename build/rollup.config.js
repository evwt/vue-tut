import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';

let customResolver = resolve({
  extensions: ['.js', '.scss', '.vue']
});

let projectRootDir = path.resolve(__dirname, '..');

export default {
  input: 'src/index.js',
  output: {
    name: 'VueTut',
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  },
  external: ['vue'],
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src')
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm.js'
        }
      ],
      customResolver
    }),
    resolve(),
    commonjs(),
    postcss({
      extract: true
    }),
    vue({
      css: true,
      compileTemplate: true
    })
  ]
};
