/* global module */
module.exports = function (config) {
    'use strict';
    config.set({

        basePath: './wwwroot',

        singleRun: true,

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
                'app/test.ts',
                'app/**/*.spec.ts'
            ],
            serveFiles: [
                'app/**/*!(*.spec).ts',
                'tsconfig.json'
            ]
        },

        proxies: {
            '/app': '/base/app',
            '/jspm_packages': '/base/jspm_packages',
            '/tsconfig.json': '/base/tsconfig.json'
        },

        reporters: ['spec'],

        browsers: ['PhantomJS']
    });
};