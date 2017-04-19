module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            'src/**/*.ts',
            'tests/**/*.spec.ts'
        ],
        preprocessors: {
            "src/**/*.ts": ["karma-typescript",],
            "tests/**/*.ts": ["karma-typescript"]  
        },
        reporters: ["progress", "karma-typescript"]
    });
};