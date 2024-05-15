import { defineConfig } from 'father';

const library = 'queryString';

const externals = {
  //
};

export default defineConfig({
  umd: {
    entry: {
      'src/index.ts': {
        name: library,
        // 拆解 default
        chainWebpack: memo => {
          memo.output.libraryExport('default');
          return memo;
        },
        sourcemap: true,
        externals,
      },
    },
    output: 'dist',
  },
});
