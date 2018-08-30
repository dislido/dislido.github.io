import React from 'react';
import { InputNumber } from 'antd';
import EquipInput from './equipinput';
import '../calcular.scss';


export default class AA1230 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lucky: 0,
      AA: 0,
      equips: [0, 0, 0, 0, 0, 0],
    };
  }

  handleLuckyChange = lucky => this.setState({ lucky });

  handleAAChange = AA => this.setState({ AA });

  handleEquipChange(index, cal) {
    const { equips } = this.state;
    equips[index] = cal;
    this.setState({ equips });
  }

  render() {
    const { lucky, AA, equips } = this.state;
    const totalValue = equips.reduce((p, c) => p + c, 0) + lucky + AA;
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
        <EquipInput onChange={cal => this.handleEquipChange(0, cal)} />
        <EquipInput onChange={cal => this.handleEquipChange(1, cal)} />
        <EquipInput onChange={cal => this.handleEquipChange(2, cal)} />
        <EquipInput onChange={cal => this.handleEquipChange(3, cal)} />
        <EquipInput onChange={cal => this.handleEquipChange(4, cal)} />
        <EquipInput onChange={cal => this.handleEquipChange(5, cal)} />
        <p>
          总加权对空值,对空喷进发动率：
          {totalValue.toFixed(2)}
          /282=
          {(totalValue / 2.82).toFixed(2)}
          %
        </p>
      </div>
    );
  }
}
