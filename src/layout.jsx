import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Route, Switch, Link, Redirect,
} from 'react-router-dom';
import Home from 'page/home';
import WIP from 'page/wip';
import Kancolle from 'page/kancolle';
import { getRouteSelectKey } from './util';

// const ctx = React.createContext();

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: '/',
      routePath: {
        home: '/home',
        wip: '/wip',
        kancolle: '/kancolle',
      },
    };
  }

  handleRoute = (routeKey) => {
    const { currentRoute } = this.state;
    if (routeKey === currentRoute) return;
    this.setState({ currentRoute: routeKey });
  }

  render() {
    const { routePath } = this.state;
    return (
      <div style={{ minWidth: '1366px' }}>
        <header>
          <div className="headerMenu" style={{ display: 'flex' }}>
            <Menu
              selectedKeys={[getRouteSelectKey(routePath)]}
              mode="horizontal"
              style={{ flexGrow: 1 }}
            >
              <Menu.Item key={routePath.home}>
                <Link to={routePath.home} replace={window.location.hash === '#/'}>
                  <Icon type="home" />
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item key={routePath.kancolle}>
                <Link to={routePath.kancolle} replace={window.location.hash === '#/kancolle'}>
                  <Icon type="home" />
                  砍口垒
                </Link>
              </Menu.Item>
              <Menu.Item key={routePath.wip} style={{ float: 'right' }}>
                <Link to={routePath.wip} title="研究室" replace={window.location.hash === '#/wip'}>
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
        <Switch>
          <Route path="/wip" component={WIP} strict />
          <Route path="/home" component={Home} strict />
          <Route path="/kancolle" component={Kancolle} strict />
          <Redirect path="/" exact strict to="/home" />
        </Switch>
      </div>
    );
  }
}
