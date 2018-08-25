import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import Home from './home';
import WIP from './wip';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: '/',
    };
  }

  handleRoute = (routeKey) => {
    const { currentRoute } = this.state;
    if (routeKey === currentRoute) return;
    this.setState({ currentRoute: routeKey });
  }

  render() {
    return (
      <div style={{ minWidth: '1366px' }}>
        <header>
          <div className="headerMenu" style={{ display: 'flex' }}>
            <Menu mode="horizontal" style={{ flexGrow: 1 }}>
              <Menu.Item>
                <Link to="/" replace={window.location.hash === '#/'}>
                  <Icon type="home" />
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item style={{ float: 'right' }}>
                <Link to="/wip" title="研究室" replace={window.location.hash === '#/wip'}>
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
          <Route path="/wip" component={WIP} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
