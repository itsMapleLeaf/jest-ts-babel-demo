module.exports = {
  // look for ts files
  testMatch: ["**/*.test.(j|t)s?(x)"],
  // tells it that ts/tsx files are valid modules
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  // explicitly transform ts/tsx with babel
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
}
