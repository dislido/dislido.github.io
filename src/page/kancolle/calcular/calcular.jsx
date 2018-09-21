import React from 'react';
import {
  Col, Row, Card, Modal,
} from 'antd';
import AAPB from '@page/kancolle/calcular/aapb';
import aapbimg from './img/aa1230-card.png';

export default class Calcular extends React.Component {
  static modalComponents = {
    AAPB,
  };

  constructor() {
    super();
    this.state = {
      modalComponent: null,
      openModal: false,
      modalTitle: '',
    };
  }

  handleClose = () => this.setState({ openModal: false });

  render() {
    const { modalComponent, openModal, modalTitle } = this.state;
    const ModalComponent = Calcular.modalComponents[modalComponent];
    return (
      <div>
        <Row>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="对空喷进弹幕发动率计算" src={aapbimg} />}
              onClick={() => {
                this.setState({ modalComponent: 'AAPB', modalTitle: '对空喷进弹幕发动率计算', openModal: true });
              }}
            >
              对空喷进弹幕发动率计算
            </Card>
          </Col>
        </Row>
        <Modal
          title={modalTitle}
          visible={openModal}
          onCancel={this.handleClose}
          footer={null}
          destroyOnClose
          maskClosable={false}
        >
          {ModalComponent && <ModalComponent />}
        </Modal>
      </div>
    );
  }
}
