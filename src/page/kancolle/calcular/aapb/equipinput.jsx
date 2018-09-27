import React from 'react';
import { Input, Select, InputNumber } from 'antd';
import PropTypes from 'prop-types';

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

/**
 * 格式化改修星数
 * @param {number} e 改修星数
 */
const impFormatter = e => `★${e === '10' ? 'max' : e}`;

export default class EquipInput extends React.Component {
  static propTypes = {
    constP2: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    constP2: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      type: '0',
      value: 0,
      star: 0,
      result: 0,
    };
  }

  componentDidMount() {
    const { constP2 } = this.props;
    if (!constP2) return;
    this.setState({ type: '106', value: 8 }, () => this.calcResult());
  }

  handleTypeChange = type => this.setState({ type, value: 8 }, this.calcResult);

  handleValueChange = value => this.setState({ value: +value || 0 }, this.calcResult);

  handleImprovementRankChange = star => this.setState({ star: +star || 0 }, this.calcResult);

  calcResult() {
    const { type, value, star } = this.state;
    const { onChange } = this.props;
    const result = (type % 100) * value + calcStar(star, type);
    this.setState({ result });
    onChange(result, type === '106');
  }

  render() {
    const {
      type, value, star, result,
    } = this.state;
    const { constP2 } = this.props;
    return (
      <Input.Group compact>
        <Select value={type} onChange={this.handleTypeChange} className="select-type" disabled={constP2}>
          <Select.Option value="0">无</Select.Option>
          <Select.Option value="6">机枪</Select.Option>
          <Select.Option value="4">高角炮</Select.Option>
          <Select.Option value="3">电探</Select.Option>
          <Select.Option value="106">喷2</Select.Option>
        </Select>
        <InputNumber
          disabled={type === '0' || constP2}
          value={value}
          min={0}
          style={{ width: '40%' }}
          onChange={this.handleValueChange}
        />
        <InputNumber
          disabled={type === '0'}
          formatter={impFormatter}
          min={0}
          max={10}
          value={star}
          onChange={this.handleImprovementRankChange}
          style={{ width: '20%' }}
        />
        <Input value={result} disabled title="提供的加权对空值" style={{ width: '40px' }} />
      </Input.Group>
    );
  }
}
