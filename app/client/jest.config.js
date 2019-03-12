module.exports = {
    setupFiles: [
        '<rootDir>/config/jest/test-shim',
        '<rootDir>/config/jest/test-setup'
    ],
    verbose: false,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testMatch: [
        '**/src/**.(test|spec).(jsx|tsx|js|ts)'
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    moduleNameMapper: {
        '^@app/(.*)': '<rootDir>/$1'
    },
    testEnvironment: 'node'
}