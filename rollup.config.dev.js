import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.js',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    nodeResolve({
       extensions: ['.js', '.jsx']
    }),
    babel({
      presets: ['@babel/preset-react']
    }),
    commonjs({
      include: ['node_modules/**']
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'dist'],
      historyApiFallback: true,
      host: 'localhost',
      port: 3000
    }),
    livereload({ watch: 'dist' })
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  }
};
