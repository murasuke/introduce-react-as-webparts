import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
const packageJson = require('./package.json');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/lib.ts',
  output: [
    // { // node用(commonjs)
    //   file: packageJson.main,
    //   format: 'cjs',
    //   sourcemap: true,
    // },
    {
      // esmodule
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    // { // esmoduleを使えない環境用
    //   file: packageJson.umd,
    //   format: 'umd',
    //   name: 'MyBundle',
    //   sourcemap: true,
    // },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true,
    }),
    typescript({
      tsconfig: 'tsconfig.rollup.json',
      useTsconfigDeclarationDir: true,
    }),
    postcss(),
  ],
};
