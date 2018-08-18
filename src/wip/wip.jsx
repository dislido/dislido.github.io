import React from 'react';
import { Menu, Card, Icon } from 'antd';
import './wip.scss';

export default class WIP extends React.Component {
  state = {
    // 左侧菜单是否折叠
    menuFold: false,
  };

  handleToggleMenu = () => {
    this.setState(prev => ({ menuFold: !prev.menuFold }));
  };

  render() {
    const { menuFold } = this.state;
    return (
      <div data-stylefield="wip">
        <div style={{ display: 'flex' }}>
          <div
            className="toggleMenuBtn"
            onClick={this.handleToggleMenu}
            onKeyUp={this.handleToggleMenu}
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
          <Menu />
          <Card style={{ width: 300, margin: '5px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    );
  }
}
