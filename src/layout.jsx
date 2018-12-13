import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import { getDefaultSelectedKey, linkProps } from '@/util';

const Home = React.lazy(() => import('@/page/home'));
const WIP = React.lazy(() => import('@/page/wip'));
const Kancolle = React.lazy(() => import('@/page/kancolle'));
const Azurlane = React.lazy(() => import('@/page/azurlane'));

export default function Layout() {
  const routerSwitch = (
    <Switch>
      <Route path="/wip" component={WIP} strict />
      <Route path="/kancolle" component={Kancolle} strict />
      <Route path="/azurlane" component={Azurlane} strict />
      <Route path="/" component={Home} strict />
    </Switch>
  );
  const defaultSelectedKey = getDefaultSelectedKey(routerSwitch);

  return (
    <div style={{ minWidth: '1366px', overflowX: 'hidden' }}>
      <header>
        <div className="headerMenu" style={{ display: 'flex' }}>
          <Menu
            defaultSelectedKeys={[defaultSelectedKey]}
            mode="horizontal"
            style={{ flexGrow: 1 }}
          >
            <Menu.Item key="/">
              <Link {...linkProps('/')}>
                <Icon type="home" />
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="/kancolle">
              <Link {...linkProps('/kancolle')}>
                <Icon type="home" />
                砍口垒
              </Link>
            </Menu.Item>
            <Menu.Item key="/azurlane">
              <Link {...linkProps('/azurlane')}>
                <Icon type="home" />
                碧蓝航线
              </Link>
            </Menu.Item>
            <Menu.Item key="/wip" style={{ float: 'right' }}>
              <Link title="研究室" {...linkProps('/wip')}>
                <Icon type="filter" style={{ transform: 'rotate(180deg)', marginRight: '0' }} />
              </Link>
            </Menu.Item>
          </Menu>
          <div className="headerMenu-addon">
            <a href="https://github.com/dislido" target="_blank" rel="noopener noreferrer" title="github">
              <Icon type="github" />
            </a>
          </div>
        </div>
      </header>
      <React.Suspense fallback={<h2>Loading</h2>}>
        {routerSwitch}
      </React.Suspense>
    </div>
  );
}
