import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import Home from './home';
import Code from './code';

const Pazz = Code;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <header>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/home" replace={window.location.hash === '#/home'}>
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
          </Menu>
        </header>
        <Switch>
          <Route path="/pazz" component={Pazz} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
