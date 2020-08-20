import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import css from 'rollup-plugin-css-only';

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
    css(),
    scss(),
    vue({
      css: true,
      compileTemplate: true
    })
  ]
};
