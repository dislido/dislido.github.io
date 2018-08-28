import React from 'react';
import { Row, Col, Card } from 'antd';
import './kancolle.scss';

export default class Kancolle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Row type="flex" gutter={16} data-stylefield="kancolle">
        <Col span={2} />
        <Col span={16}>
          WIP
        </Col>
        <Col span={6}>
          <Card>
            15113194
          </Card>
        </Col>
      </Row>
    );
  }
}
