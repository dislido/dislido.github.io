import React from 'react';
import { Menu, Card, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
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
    const { match } = this.props;
    this.state = {
      // 左侧菜单是否折叠
      menuFold: false,
      routePath: {
        ywwuyiGame: `${match.url}/ywwuyi-game`,
        unicode: `${match.url}/unicode`,
      },
    };
  }

  handleToggleMenu = () => {
    this.setState(prev => ({ menuFold: !prev.menuFold }));
  };

  render() {
    const { menuFold, routePath } = this.state;
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
          <Menu className={['leftmenu', menuFold ? 'fold' : ''].join(' ')}>
            <Menu.Item key={routePath.ywwuyiGame}>
              <Link to={routePath.ywwuyiGame} replace={window.location.hash === `#${routePath.ywwuyiGame}`}>丢人游戏</Link>
            </Menu.Item>
            <Menu.Item key={routePath.unicode}>
              <Link to={routePath.unicode} replace={window.location.hash === `#${routePath.unicode}`}>unicode</Link>
            </Menu.Item>
          </Menu>
          <div style={{ flexGrow: 1 }}>
            <Switch>
              <Route path={routePath.ywwuyiGame} component={YwwuyiGame} />
              <Route path={routePath.unicode} component={Unicode} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
