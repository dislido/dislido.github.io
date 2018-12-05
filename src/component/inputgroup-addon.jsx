import React from 'react';
import { Input } from 'antd';
import './inputgroup-addon.less';

export default function InputGroupAddon(props) {
  return <Input disabled className="inputgroup-addon" {...props} />;
}
