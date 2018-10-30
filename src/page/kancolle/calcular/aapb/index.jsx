import React from 'react';
import { InputNumber } from 'antd';
import EquipInput from './equipinput-hook';
import '../calcular.less';


export default class AAPB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lucky: 0,
      AA: 0,
      equips: [0, 0, 0, 0, 0, 0],
      isP2: [true, false, false, false, false, false],
    };
  }

  handleLuckyChange = lucky => this.setState({ lucky: +lucky || 0 });

  handleAAChange = AA => this.setState({ AA: +AA || 0 });

  handleEquipChange(index, cal, equipIsP2 = false) {
    const { equips, isP2 } = this.state;
    equips[index] = cal;
    isP2[index] = equipIsP2;
    this.setState({ equips, isP2 });
  }

  render() {
    const {
      lucky, AA, equips, isP2,
    } = this.state;
    const totalValue = equips.reduce((p, c) => p + c, 0) + lucky + AA;
    const extraP2 = isP2.filter(it => it).length - 1;
    return (
      <div data-stylefield="aa1230">
        <div className="input-item">
          <span className="input-label">运：</span>
          <InputNumber style={{ width: '40%' }} min={0} value={lucky} onChange={this.handleLuckyChange} />
        </div>
        <div className="input-item">
          <span className="input-label">裸对空：</span>
          <InputNumber style={{ width: '40%' }} min={0} value={AA} onChange={this.handleAAChange} />
        </div>
        <EquipInput onChange={(cal, equipIsP2) => this.handleEquipChange(0, cal, equipIsP2)} constP2 />
        <EquipInput onChange={(cal, equipIsP2) => this.handleEquipChange(1, cal, equipIsP2)} />
        <EquipInput onChange={(cal, equipIsP2) => this.handleEquipChange(2, cal, equipIsP2)} />
        <EquipInput onChange={(cal, equipIsP2) => this.handleEquipChange(3, cal, equipIsP2)} />
        <EquipInput onChange={(cal, equipIsP2) => this.handleEquipChange(4, cal, equipIsP2)} />
        <EquipInput onChange={(cal, equipIsP2) => this.handleEquipChange(5, cal, equipIsP2)} />
        <p>
          对空喷进弹幕发动率：
          {totalValue.toFixed(2)}
          /282+
          {`${extraP2 * 15}%`}
          =
          {Math.min(totalValue / 2.82 + extraP2 * 15, 100).toFixed(2)}
          %
        </p>
      </div>
    );
  }
}
