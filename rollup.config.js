import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/utils.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
      tsconfig: 'tsconfig.json',
    }),
    terser(),
  ],
};
