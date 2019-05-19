// https://umijs.org/config/
import path from 'path';
import pageRoutes from './router.config';
import theme from '../src/theme';

export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true, // 启用antd-mobile
        dva: true, // 启用dva插件
        dynamicImport: { // 按需加载的配置
          loadingComponent: './components/PageLoading/index', // loading组件
          webpackChunkName: true, // 添加chunkName
        },
        title: {
          defaultTitle: '小店',
        },
        dll: true, // 启用dll配置
        pwa: {
          workboxPluginMode: 'InjectManifest',
          workboxOptions: {
            importWorkboxFrom: 'local',
          },
        },
        hd: true, // 启用移动端高清方案
        fastClick: true, // 启用fastclick
        routes: {
          exclude: [],
        },
        hardSource: false,
      },
    ],
  ],
  //   exportStatic: {},
  // 路由配置
  routes: pageRoutes,
  // Theme for antd-mobile
  // https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
  theme: {
    'brand-primary': theme.primaryColor,
  },
  //   ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
  },
  targets: {
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  outputPath: './deploy/dist',
  hash: true,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
};
