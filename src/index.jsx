import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import Layout from './layout';
import './style/index.less';

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider locale={zhCN}>
      <HashRouter>
        <Layout />
      </HashRouter>
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById('app'),
);
