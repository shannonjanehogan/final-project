const PORT        = 4000;

const webpack     = require('webpack');
const config      = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

function inspect(o, d) {
  console.log(util.inspect(o, { colors: true, depth: d || 1}));
}

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  })
  .listen(PORT, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log("Final Project listening on port " + PORT));
  });
