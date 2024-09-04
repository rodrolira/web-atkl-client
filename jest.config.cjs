module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-stub',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@mui/material).+\\.js$',
    '/node_modules/(?!@mui/material).+\\.jsx$',
    '/node_modules/(?!@mui/material/Unstable_Grid2).+\\.js$'

  ],
  moduleDirectories: ['./node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.js'],

}
