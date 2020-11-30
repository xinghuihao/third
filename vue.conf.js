module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maizuo.com',
        // ws: true,
        changeOrigin: true
      }
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
