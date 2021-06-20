module.exports = {
    clearMocks: true,
    // setupFiles: ['./frontend/testUtils/helpers.js'],
    testMatch: ['<rootDir>/spec/**/*_(spec|test|snap).[jt]s?(x)'],
    // testRegex : /\/spec\/\*\*\/?(*.)+_(spec|test|snap).[jt]s?(x)/,
    modulePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/build_cache/", '/node_modules/'],
    testPathIgnorePatterns : ["<rootDir>/build/", "<rootDir>/build_cache/", '/node_modules/'],
    setupFilesAfterEnv: ['jest-extended', require.resolve('expect-more-jest')],
    verbose: false,
    preset: 'ts-jest',
    // testEnvironment: 'node',
    globals: {
        'ts-jest': {
            compiler: 'typescript',
            diagnostics: false,
        },
    },
    cacheDirectory: './build_cache/ts-jest/',
};
