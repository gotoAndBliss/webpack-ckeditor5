const path                   = require('path')
const HtmlWebpackPlugin      = require('html-webpack-plugin')
const CKEditorWebpackPlugin  = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const { styles }             = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },  
  plugins: [
    new CKEditorWebpackPlugin({language: 'en'}),
    new HtmlWebpackPlugin({
      title: 'Getting Webpack to Work',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
  ],
    module: {
        rules: [
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: styles.getPostCssConfig( {
                              themeImporter: {
                                  themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                              },
                              minify: true
                          })                          
                        }
                    },
                ]
            }
        ]
    } 
}