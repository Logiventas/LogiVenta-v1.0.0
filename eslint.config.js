// eslint.config.js
export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // Suponiendo que estás utilizando estas configuraciones, ajusta según tus necesidades
    '@electron-toolkit/eslint-config-ts',
    '@electron-toolkit/eslint-config-prettier'
  ],
  overrides: [
    {
      files: ['*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: ['./tsconfig.json']  // Asegúrate de que la ruta a tsconfig.json es correcta
      },
      rules: {
        // Especifica cualquier regla personalizada aquí
      }
    }
  ]
};
