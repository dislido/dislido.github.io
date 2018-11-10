import React, { useState } from 'react';
import {
  Card, Modal,
} from 'antd';
import AAPB from '@/page/kancolle/calcular/aapb';
import { useModal } from '@/util/hooks/hooks4antd';
// import ImageCard from '@/component/imagecard';
import aapbimg from './img/aa1230-card.png';

const calcComponents = {
  AAPB,
};

export default function Calcular() {
  const { modalProps, openModal } = useModal();
  const [calcComponentName, setCalcComponent] = useState('');
  const CalcComponent = calcComponents[calcComponentName];

  const openCalcModal = (compName, title) => {
    setCalcComponent(compName);
    openModal({ title });
  };

  return (
    <div>
      <div className="cardset" style={{ paddingTop: '8px' }}>
        {/* <ImageCard
          cardProps={{
            hoverable: true,
            onClick: () => {
              this.setState({ modalComponent: 'AAPB', modalTitle: '对空喷进弹幕发动率计算', openModal: true });
            },
          }}
          imgNode={<img alt="对空喷进弹幕发动率计算" src={aapbimg} style={{ width: '250px' }} />}
          hoverNode="test"
        /> */}
        <Card
          hoverable
          cover={<img alt="对空喷进弹幕发动率计算" src={aapbimg} style={{ width: '250px' }} />}
          onClick={() => openCalcModal('AAPB', '对空喷进弹幕发动率计算')}
        >
          对空喷进弹幕发动率计算
        </Card>
      </div>
      <Modal footer={null} destroyOnClose maskClosable {...modalProps}>
        {CalcComponent && <CalcComponent />}
      </Modal>
    </div>
  );
}
