import React from 'react';
import { Menu, Icon } from 'antd';

export default class Home extends React.Component {
  state = {

  };

  render() {
    return (
      <div>
        <header>
          <Menu mode="horizontal">
            <Menu.Item>
              <Icon type="home" />
              首页
            </Menu.Item>
          </Menu>
        </header>
        ok!
      </div>
    );
  }
}
