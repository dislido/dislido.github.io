import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Route, Switch, Link, Redirect,
} from 'react-router-dom';
import { getRouteSelectKey } from './util';
import Home from './home';
import WIP from './wip';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: '/',
      routePath: {
        home: '/home',
        wip: '/wip',
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
              <Menu.Item key={routePath.wip} style={{ float: 'right' }}>
                <Link to={routePath.wip} title="研究室" replace={window.location.hash === '#/wip'}>
                  <Icon type="filter" style={{ transform: 'rotate(180deg)', marginRight: '0' }} />
                </Link>
              </Menu.Item>
            </Menu>
            <div className="headerMenu-addon">
              <a
                href="https://github.com/dislido"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  height: '100%',
                  color: 'black',
                }}
                title="github"
              >
                <Icon type="github" style={{ marginRight: '0', fontSize: '24px', verticalAlign: 'middle' }} />
              </a>
            </div>
          </div>
        </header>
        <Switch>
          <Route path="/wip" component={WIP} strict />
          <Route path="/home" component={Home} strict />
          <Redirect path="/" exact strict to="/home" />
        </Switch>
      </div>
    );
  }
}
