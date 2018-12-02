import React, { useState } from 'react';
import { Modal } from 'antd';
import AAPB from '@/page/kancolle/calcular/aapb';
import { useModal } from '@/util/hooks/hooks4antd';
import ImageCard from '@/component/imagecard';
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
        <ImageCard
          hoverable
          onClick={() => openCalcModal('AAPB', '对空喷进弹幕发动率计算')}
          backgroundImage={aapbimg}
          style={{ width: 240, height: 180 }}
          text="对空喷进弹幕发动率计算"
        />
      </div>
      <Modal footer={null} destroyOnClose maskClosable {...modalProps}>
        {CalcComponent && <CalcComponent />}
      </Modal>
    </div>
  );
}
