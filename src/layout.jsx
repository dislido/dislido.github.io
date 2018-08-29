import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Route, Switch, Link, Redirect,
} from 'react-router-dom';
import { getDefaultSelectedKey, linkProps } from '@util';
import Home from '@page/home';
import WIP from '@page/wip';
import Kancolle from '@page/kancolle';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.routerSwitch = (
      <Switch>
        <Route path="/home" component={Home} strict />
        <Route path="/wip" component={WIP} strict />
        <Route path="/kancolle" component={Kancolle} strict />
        <Redirect path="/" exact strict to="/home" />
      </Switch>
    );
    this.defaultSelectedKey = getDefaultSelectedKey(this.routerSwitch);
  }

  render() {
    return (
      <div style={{ minWidth: '1366px' }}>
        <header>
          <div className="headerMenu" style={{ display: 'flex' }}>
            <Menu
              defaultSelectedKeys={[this.defaultSelectedKey]}
              mode="horizontal"
              style={{ flexGrow: 1 }}
            >
              <Menu.Item key="/home">
                <Link {...linkProps('/home')}>
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
        {this.routerSwitch}
      </div>
    );
  }
}
