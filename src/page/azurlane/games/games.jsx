import React, { useState } from 'react';
import { Modal } from 'antd';
import ImageCard from '@/component/imagecard';
import { useModal } from '@/util/hooks/hooks4antd';
import PixelDrawer from './pixeldrawer';
import pixeldrawerImg from '../img/pixeldrawer.jpg';
import STGGame from './stggame';

const gameComponents = {
  PixelDrawer,
  STGGame,
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
          text="像素画"
          backgroundImage={pixeldrawerImg}
          onClick={() => openGameModal('PixelDrawer', '像素画', { width: 641 })}
        />
        <ImageCard
          text="测试游戏(WIP)"
          onClick={() => openGameModal('STGGame', '测试游戏', { width: 1000 })}
        />
      </div>
      <Modal footer={null} destroyOnClose maskClosable={false} {...modalProps}>
        {GameComponent && <GameComponent />}
      </Modal>
    </>
  );
}
