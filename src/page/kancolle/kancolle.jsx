import React from 'react';
import {
  Row, Col, Menu,
} from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDefaultSelectedKey, linkProps } from '@util';
import Mainpage from './mainpage';
import { AA1230 } from './util';
import './kancolle.scss';

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
        <Route path={`${props.match.url}/main`} component={Mainpage} exact strict />
        <Route path={`${props.match.url}/aa1230`} component={AA1230} exact strict />
      </Switch>
    );
  }

  render() {
    const { match } = this.props;
    return (
      <Row type="flex" gutter={16} data-stylefield="kancolle">
        <Col span={2}>
          <Menu defaultSelectedKeys={[getDefaultSelectedKey(this.routerSwitch)]} style={{ height: '100%' }}>
            <Menu.Item key={`${match.url}/main`}>
              <Link {...linkProps(`${match.url}/main`)}>
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key={`${match.url}/aa1230`}>
              <Link {...linkProps(`${match.url}/aa1230`)}>
                喷进炮发动率计算
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={16}>
          {this.routerSwitch}
        </Col>
        <Col span={6} />
      </Row>
    );
  }
}
