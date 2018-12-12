import React from 'react';
import { Collapse } from 'antd';
import myinfImg from './img/myinf.png';

export default function Mainpage() {
  return (
    <div>
      <Collapse>
        <Collapse.Panel header="狗牌">
          <img src={myinfImg} alt="狗牌20181202" />
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}
