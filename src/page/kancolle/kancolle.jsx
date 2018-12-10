import React from 'react';
import {
  Row, Col, Menu,
} from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDefaultSelectedKey, linkProps } from '@/util';
import Mainpage from './mainpage';
import Calcular from './calcular';
import useTitleEffect from '@/util/hooks/use-title-effect';

function Kancolle({ match }) {
  useTitleEffect('砍口垒');
  const routerSwitch = (
    <Switch>
      <Route path={`${match.url}/calculuar`} component={Calcular} />
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
          <Menu.Item key={`${match.url}/calculuar`}>
            <Link {...linkProps(`${match.url}/calculuar`)}>
              计算器
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

Kancolle.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default Kancolle;
