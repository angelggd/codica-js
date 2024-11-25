import config from "eslint-config-standard";

/** @type {import('eslint').Linter.Config[]} */
/* export default [
  ...[].concat(config),
]; */

export default [
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
