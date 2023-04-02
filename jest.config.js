module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    },
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/dist/',
      '<rootDir>/cypress/',
    ],
    moduleNameMapper: {
      '^@app/(.*)': '<rootDir>/src/app/$1',
      '^@core/(.*)': '<rootDir>/src/app/core/$1',
      '^@store/(.*)': '<rootDir>/store/$1'
    }
  };
  