import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select, InputNumber } from 'antd';
import { useNumberState } from '@/util/hooks';

const { useState, useEffect } = React;

/**
 * 计算装备改修对空值加成
 * @param {number} star 改修星数
 * @param {string} type 装备类型 6:机枪 4:高角炮 3:电探
 */
function calcStar(star, type) {
  if (type === '6' || type === '106') return 4 * (star ** 0.5);
  if (type === '4') return 3 * (star ** 0.5);
  // 电探改修不加对空
  return 0;
}

function calcResult(type, value, star) {
  return (type % 100) * value + calcStar(star, type);
}

function EquipInput({ constP2 = false, onChange }) {
  const [type, setType] = useState(constP2 ? '106' : '0');
  const [AA, setAA] = useNumberState(constP2 ? 8 : 0);
  const [star, setStar] = useNumberState(0);
  const result = calcResult(type, AA, star);
  const setEquipType = (eType) => {
    if (eType === '106') setAA(8);
    setType(eType);
  };

  useEffect(() => {
    onChange(result, type === '106');
  }, [result, type === '106']);

  return (
    <Input.Group compact>
      <Select value={type} onChange={setEquipType} className="select-type" disabled={constP2}>
        <Select.Option value="0">无</Select.Option>
        <Select.Option value="6">机枪</Select.Option>
        <Select.Option value="4">高角炮</Select.Option>
        <Select.Option value="3">电探</Select.Option>
        <Select.Option value="106">喷2</Select.Option>
      </Select>
      <InputNumber
        disabled={type === '106' || type === '0' || constP2}
        value={AA}
        min={0}
        style={{ width: '40%' }}
        onChange={setAA}
      />
      <InputNumber
        disabled={type === '0'}
        formatter={e => `★${e === '10' ? 'max' : e}`}
        min={0}
        max={10}
        value={star}
        onChange={setStar}
        style={{ width: '20%' }}
      />
      <Input value={result} disabled title="提供的加权对空值" style={{ width: '40px' }} />
    </Input.Group>
  );
}

EquipInput.propTypes = {
  constP2: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

EquipInput.defaultProps = {
  constP2: false,
};

export default EquipInput;
