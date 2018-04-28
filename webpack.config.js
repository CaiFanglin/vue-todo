const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');


const config = {
	performance: {
  		hints: false
	},
	mode: 'production',
	target: 'web',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css/,
        		use: [
            		'style-loader',
            		'css-loader',
        		]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.jxs$/,
				loader: 'babel-loader',
			},
			{
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,  // 文件小于1024字节，转换成base64编码，写入文件里面
                            name: '[name]-output.[ext]'
                        }
                    }
                ]
            }
		]
	},
	devtool: '#cheap-module-eval-source-map',
	devServer: {
        port: '8888',
        host: '0.0.0.0',
        overlay: {  // webpack编译出现错误，则显示到网页上
            errors: true,
        },
        // open: true,

        // 不刷新热加载数据
        hot: true
	},
	plugins: [
		new HTMLPlugin()
	]
};

module.exports = config; 