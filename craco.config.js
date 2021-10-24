const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@styles': path.resolve(__dirname, 'src/assets/styles/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      // '@': path.resolve(__dirname, 'src/'),
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   inject: true,
      //   chunks: ['main'],
      //   template: path.resolve(__dirname, 'public/index.html'),
      // }),
      // new HtmlWebpackPlugin({
      //   inject: true,
      //   chunks: ['silentRenew'],
      //   template: path.resolve(__dirname, './silent_renew/index.html'),
      //   filename: 'silent_renew.html',
      // }),
    ],
    configure: (webpackConfig, { env, paths }) => {
      // // console.log('WEBPACK', webpackConfig, 'ENV', env, 'PATHS', paths);
      // paths.appSilentRenewJs = path.resolve(
      //   __dirname,
      //   './silent_renew/index.js'
      // );
      // // console.log(paths);
      // // console.log('DEFAULT', webpackConfig.entry);
      // const mainEntry = [...webpackConfig.entry];
      // // console.log('MAIN', mainEntry, mainEntry.length);
      // // console.log(mainEntry.indexOf(paths.appIndexJs));
      // const removedMainEntry = mainEntry.slice(
      //   mainEntry.indexOf(paths.appIndexJs) + 1,
      //   mainEntry.length
      // );
      // const silentRenewEntry = [...removedMainEntry, paths.appSilentRenewJs];
      // // console.log('SILENT', silentRenewEntry, silentRenewEntry.length);
      // // console.log(paths.appSilentRenewJs, mainEntry);
      // webpackConfig.entry = {
      //   main: mainEntry,
      //   silentRenew: silentRenewEntry,
      // };

      webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
        if (plugin.constructor.name === 'GenerateSW') {
          return new WorkboxWebpackPlugin.InjectManifest({
            swSrc: './src/sw.js',
            swDest: 'service-worker.js',
          });
        }
        return plugin;
      });

      return webpackConfig;
    },
  },
  // jest: {
  //   configure: {
  //     moduleNameMapper: {
  //       '^@(.*)$': '<rootDir>/src$1',
  //     },
  //   },
  // },
  jest: {
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      jestConfig.moduleNameMapper['^@icons(.*)$'] =
        '<rootDir>/src/assets/icons$1';
      jestConfig.moduleNameMapper['^@styles(.*)$'] =
        '<rootDir>/src/assets/styles$1';
      jestConfig.moduleNameMapper['^@components(.*)$'] =
        '<rootDir>/src/components$1';
      jestConfig.moduleNameMapper['^@containers(.*)$'] =
        '<rootDir>/src/containers$1';
      jestConfig.moduleNameMapper['^@services(.*)$'] =
        '<rootDir>/src/services$1';
      jestConfig.moduleNameMapper['^@context(.*)$'] = '<rootDir>/src/context$1';
      jestConfig.moduleNameMapper['^@api(.*)$'] = '<rootDir>/src/api$1';
      // jestConfig.moduleNameMapper['^@(.*)$'] = '<rootDir>/src$1';
      return jestConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    // console.log(devServerConfig);
    // devServerConfig.historyApiFallback = {
    //   disableDotRule: true,
    //   rewrites: [
    //     { from: /^\/silent_renew.html/, to: '/build/silent_renew.html' },
    //   ],
    // };
    return devServerConfig;
  },
};
