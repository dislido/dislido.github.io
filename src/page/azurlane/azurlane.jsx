import React from 'react';
import {
  Row, Col, Menu,
} from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDefaultSelectedKey, linkProps } from '@/util';
import useTitleEffect from '@/util/hooks/use-title-effect';
import Mainpage from './mainpage';
import Games from './games';

export default function Azurlane({ match }) {
  useTitleEffect('碧蓝航线');
  const routerSwitch = (
    <Switch>
      <Route path={`${match.url}/games`} component={Games} />
      <Route path={`${match.url}`} component={Mainpage} />
    </Switch>
  );

  return (
    <Row type="flex" gutter={16}>
      <Col span={2}>
        <Menu defaultSelectedKeys={[getDefaultSelectedKey(routerSwitch)]} style={{ height: '100%' }}>
          <Menu.Item key={`${match.url}`}>
            <Link {...linkProps(`${match.url}`)}>
              首页
            </Link>
          </Menu.Item>
          <Menu.Item key={`${match.url}/games`}>
            <Link {...linkProps(`${match.url}/games`)}>
              小游戏
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={22}>
        {routerSwitch}
      </Col>
    </Row>
  );
}

Azurlane.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
