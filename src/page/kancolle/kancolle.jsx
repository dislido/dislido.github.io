import React from 'react';
import {
  Row, Col, Menu,
} from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDefaultSelectedKey, linkProps } from '@util';
import Mainpage from './mainpage';
import Calcular from './calcular';
import './kancolle.less';

export default class Kancolle extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.routerSwitch = (
      <Switch>
        <Route path={`${props.match.url}/calculuar`} component={Calcular} />
        <Route path={`${props.match.url}`} component={Mainpage} />
      </Switch>
    );
  }

  render() {
    const { match } = this.props;
    return (
      <Row type="flex" gutter={16} data-stylefield="kancolle">
        <Col span={2}>
          <Menu defaultSelectedKeys={[getDefaultSelectedKey(this.routerSwitch)]} style={{ height: '100%' }}>
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
          {this.routerSwitch}
        </Col>
      </Row>
    );
  }
}
