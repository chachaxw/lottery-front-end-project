const express = require('express');
const path = require('path')
const webpack = require('webpack');
const devMid = require('webpack-dev-middleware');
const hotMid = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.development');

const app = express();
const compiler = webpack(webpackConfig);

app.use(devMid(compiler, {
  noInfo: true,
  stats: {
    colors: true,
  },
}));
app.use(hotMid(compiler));

app.set('port', process.env.PORT || 3000);

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Port is '+ app.get('port') +', please wait to build ...');
});
