import React from 'react';
import {
  Card, Modal,
} from 'antd';
import AAPB from '@/page/kancolle/calcular/aapb';
import ImageCard from '@/component/imagecard';
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
        <div className="cardset" style={{ paddingTop: '8px' }}>
          <ImageCard
            cardProps={{
              hoverable: true,
              onClick: () => {
                this.setState({ modalComponent: 'AAPB', modalTitle: '对空喷进弹幕发动率计算', openModal: true });
              },
            }}
            imgNode={<img alt="对空喷进弹幕发动率计算" src={aapbimg} style={{ width: '250px' }} />}
            hoverNode="test"
          />
          <Card
            hoverable
            cover={<img alt="对空喷进弹幕发动率计算" src={aapbimg} style={{ width: '250px' }} />}
            onClick={() => {
              this.setState({ modalComponent: 'AAPB', modalTitle: '对空喷进弹幕发动率计算', openModal: true });
            }}
          >
            对空喷进弹幕发动率计算
          </Card>
        </div>
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
