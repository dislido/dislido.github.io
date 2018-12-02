import React from 'react';
import { Card } from 'antd';
import myinfImg from './img/myinf.jpg';

export default function Mainpage() {
  return (
    <div>
      <Card title="狗牌">
        <img src={myinfImg} style={{ maxWidth: '80%', maxHeight: '80%' }} alt="狗牌20181202" />
      </Card>
    </div>
  );
}
