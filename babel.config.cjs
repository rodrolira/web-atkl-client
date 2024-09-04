module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    '@babel/plugin-transform-private-property-in-object',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-runtime'

  ],
}
