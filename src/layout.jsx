import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import Home from './home';
import Code from './code';
import WIP from './wip';

const Pazz = Code;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
              {/* <Menu.Item>
                <Link to="/pazz" replace={window.location.hash === '#/pazz'}>
                  <Icon type="code-o" />
                  啪zz
                </Link>
              </Menu.Item> */}
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
          <Route path="/pazz" component={Pazz} />
          <Route path="/wip" component={WIP} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
