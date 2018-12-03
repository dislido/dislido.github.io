import React, { useState } from 'react';
import { Modal } from 'antd';
import ImageCard from '@/component/imagecard';
import { useModal } from '@/util/hooks/hooks4antd';
import PixelDrawer from './pixeldrawer';
import pixeldrawerImg from '../img/pixeldrawer.jpg';

const gameComponents = {
  PixelDrawer,
};

export default function Games() {
  const { modalProps, openModal } = useModal();
  const [gameComponentName, setGameComponent] = useState('');
  const GameComponent = gameComponents[gameComponentName];

  const openGameModal = (compName, title, extraModalProps) => {
    setGameComponent(compName);
    openModal({ title, ...extraModalProps });
  };

  return (
    <>
      <div className="cardset cardset-default" style={{ paddingTop: '8px' }}>
        <ImageCard
          text="像素画(WIP)"
          backgroundImage={pixeldrawerImg}
          onClick={() => openGameModal('PixelDrawer', '像素画', { width: 641 })}
        />
      </div>
      <Modal footer={null} destroyOnClose maskClosable {...modalProps}>
        {GameComponent && <GameComponent />}
      </Modal>
    </>
  );
}
