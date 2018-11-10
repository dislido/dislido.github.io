import React, { useState } from 'react';
import { InputNumber } from 'antd';
import { useNumberState } from '@/util/hooks';
import EquipInput from './equipinput';
import '../calcular.less';

export default function AAPB() {
  const [lucky, setLucky] = useNumberState(0);
  const [AA, setAA] = useNumberState(0);
  const [equipsWeightedAA, setEquipsWeightedAA] = useState([0, 0, 0, 0, 0, 0]);
  const [equipsIsP2, setEquipsIsP2] = useState([true, false, false, false, false, false]);

  const handleEquipChange = index => (weightedAA, isP2 = false) => {
    equipsWeightedAA[index] = weightedAA;
    equipsIsP2[index] = isP2;
    setEquipsWeightedAA(equipsWeightedAA);
    setEquipsIsP2(equipsIsP2);
  };

  const totalWeightedAA = (equipsWeightedAA.reduce((p, c) => p + c, 0) + lucky + AA).toFixed(2);
  const extraP2Bonus = (equipsIsP2.filter(it => it).length - 1) * 15;
  const rate = (totalWeightedAA / 2.82 + extraP2Bonus).toFixed(2);
  const result = `对空喷进弹幕发动率：${totalWeightedAA}/282+${extraP2Bonus}%=${rate}%`;
  return (
    <div data-stylefield="aapb">
      <div className="input-item">
        <span className="input-label">运：</span>
        <InputNumber style={{ width: '40%' }} min={0} value={lucky} onChange={setLucky} />
      </div>
      <div className="input-item">
        <span className="input-label">裸对空：</span>
        <InputNumber style={{ width: '40%' }} min={0} value={AA} onChange={setAA} />
      </div>
      <EquipInput onChange={handleEquipChange(0)} constP2 />
      <EquipInput onChange={handleEquipChange(1)} />
      <EquipInput onChange={handleEquipChange(2)} />
      <EquipInput onChange={handleEquipChange(3)} />
      <EquipInput onChange={handleEquipChange(4)} />
      <EquipInput onChange={handleEquipChange(5)} />
      <p>{result}</p>
    </div>
  );
}
