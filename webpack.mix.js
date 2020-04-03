const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        // 定义一个包含指向sass目录路径的别名或变量, 这样就可以在Vue组件中引入对应的Sass资源
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules(?!\/foundation-sites)|bower_components/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: Config.babel()
                        }
                    ]
                }
            ]
        },
        resolve: {
            alias: {
                // 将 @ 解析为 SCSS 资源根目录
                '@': path.resolve('resources/sass')
            }
        }
    })
    .sass('resources/sass/app.scss', 'public/css');
