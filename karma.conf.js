var webpackconfig = require("./webpack.config.js")
module.exports = function(config){
    config.set({
        browsers: ['PhantomJS'],
        hostname: 'localhost',
        port: 3001, //process.env.PORT,
        runnerPort: 0,
        singleRun: true,
        frameworks: ['mocha'],
        files: [
          'node_modules/jquery/dist/jquery.js',
          'app/tests/**/*.test.jsx'
        ],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap', 'jQuery'] //load the app and show up the source code not bundle.js
        },
        reporters: ['mocha'],
        client: {
            timeout: '5000',
        },
        webpack: webpackconfig,
        webpackServer: {
            noInfo: true
        },
        phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        exitOnResourceError: true
    },

    })
}
