import React from 'react';
import {
  Col, Row, Card, // Modal,
} from 'antd';

export default class Calcular extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <Card hoverable>
              对空喷进弹幕发动率计算(WIP)
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
