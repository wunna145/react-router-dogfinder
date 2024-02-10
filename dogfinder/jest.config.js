module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(css|less|scss|sass)$': 'jest-transform-stub',
    },   
  };
  