import React from 'react';
import { Input, Select, InputNumber } from 'antd';
import PropTypes from 'prop-types';

export default class EquipInput extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    disabled: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      type: '0',
      value: 0,
      improvementRank: 0,
    };
  }

  handleTypeChange = type => this.setState({ type });

  handleValueChange = value => this.setState({ value });

  handleImprovementRankChange = improvementRank => this.setState({ improvementRank });

  impFormatter = e => `★${e === '10' ? 'max' : e}`

  render() {
    const { type, value, improvementRank } = this.state;
    return (
      <Input.Group compact>
        <Select value={type} onChange={this.handleTypeChange} className="select-type">
          <Select.Option value="0">无</Select.Option>
          <Select.Option value="6">机枪</Select.Option>
          <Select.Option value="4">高角炮</Select.Option>
          <Select.Option value="3">电探</Select.Option>
        </Select>
        <InputNumber value={value} min={0} style={{ width: '40%' }} onChange={this.handleValueChange} />
        <InputNumber
          formatter={this.impFormatter}
          min={0}
          max={10}
          value={improvementRank}
          onChange={this.handleImprovementRankChange}
          style={{ width: '20%' }}
        />
      </Input.Group>
    );
  }
}
