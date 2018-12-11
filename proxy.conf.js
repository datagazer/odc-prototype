const apiVersion = 'api/v2';

module.exports = {
  [`/${apiVersion}/*`]: {
    target: 'http://api.spending.gov.ua/api/v2',
    secure: false,

    pathRewrite: {
      [`^/${apiVersion}`]: '/'
    },

    changeOrigin: true,
    autoRewrite: true
  }
};
