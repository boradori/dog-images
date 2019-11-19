module.exports = {
  // mocks for files that can be covered
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  "roots": [
    "<rootDir>/src"
  ],
  // React Testing Library adds extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  "transform": {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
}