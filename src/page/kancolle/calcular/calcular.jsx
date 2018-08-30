import React from 'react';
import {
  Col, Row, Card, Modal,
} from 'antd';
import AA1230 from '@page/kancolle/calcular/aa1230';
import aa1230img from './img/aa1230-card.png';

export default class Calcular extends React.Component {
  static modalComponents = {
    AA1230,
  };

  constructor() {
    super();
    this.state = {
      modalComponent: null,
      openModal: false,
    };
  }

  handleClose = () => this.setState({ openModal: false });

  render() {
    const { modalComponent, openModal } = this.state;
    const ModalComponent = Calcular.modalComponents[modalComponent];
    return (
      <div>
        <Row>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="对空喷进弹幕发动率计算" src={aa1230img} />}
              onClick={() => {
                this.setState({ modalComponent: 'AA1230', openModal: true });
              }}
            >
              对空喷进弹幕发动率计算(WIP)
            </Card>
          </Col>
        </Row>
        <Modal visible={openModal} onCancel={this.handleClose} footer={null}>
          {ModalComponent && <ModalComponent />}
        </Modal>
      </div>
    );
  }
}
