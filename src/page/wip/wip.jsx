import React from 'react';
import { Menu, Card, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { getDefaultSelectedKey, linkProps } from '@util';
import YwwuyiGame from './ywwuyi-game';
import Unicode from './unicode';
import './wip.scss';

export default class WIP extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { match } = props;
    this.state = {
      // 左侧菜单是否折叠
      menuFold: false,
    };
    this.routerSwitch = (
      <Switch>
        <Route path={`${match.url}/ywwuyi-game`} component={YwwuyiGame} />
        <Route path={`${match.url}/unicode`} component={Unicode} />
      </Switch>
    );
  }

  handleToggleMenu = () => {
    this.setState(prev => ({ menuFold: !prev.menuFold }));
  };

  render() {
    const { menuFold } = this.state;
    const { match } = this.props;
    return (
      <div data-stylefield="wip">
        <div style={{ display: 'flex' }}>
          <div
            className="toggleMenuBtn"
            onClick={this.handleToggleMenu}
            role="button"
            tabIndex={0}
          >
            <Icon type={menuFold ? 'menu-fold' : 'menu-unfold'} />
          </div>
          <Card style={{ flexGrow: '1' }}>
            <p style={{ marginBottom: '0' }}>这里存放正在制作或研究中的功能</p>
          </Card>
        </div>
        <div style={{ display: 'flex' }}>
          <Menu
            defaultSelectedKeys={[getDefaultSelectedKey(this.routerSwitch)]}
            className={['leftmenu', menuFold ? 'fold' : ''].join(' ')}
          >
            <Menu.Item key={`${match.url}/ywwuyi-game`}>
              <Link {...linkProps(`${match.url}/ywwuyi-game`)}>丢人游戏</Link>
            </Menu.Item>
            <Menu.Item key={`${match.url}/unicode`}>
              <Link {...linkProps(`${match.url}/unicode`)}>unicode</Link>
            </Menu.Item>
          </Menu>
          <div style={{ flexGrow: 1, padding: '5px' }}>
            {this.routerSwitch}
          </div>
        </div>
      </div>
    );
  }
}
