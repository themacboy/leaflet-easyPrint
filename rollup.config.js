import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/main.js',
  plugins: [ 
    resolve({browser: true, preferBuiltins: true}),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
    commonjs()
  ],
  output: {
	format: 'es',
	file: 'dist/bundle.js',
	name: 'leaflet-easyprint',
	extend: true,
	sourcemap: true,
  }
};