const {mix} = require('laravel-mix');

// global config.
mix.setPublicPath('static');

mix.copy('node_modules/vue/dist/vue.min.js', 'static/');
mix.copy('./node_modules/bootstrap/dist', 'static/bootstrap');

mix.js('./assets/form.js', './static');

// for CoffeeScript
mix.webpackConfig({
    module: {
        rules: [
            {test: /\.coffee$/, loader: 'coffee-loader'}
        ]
    }
});
