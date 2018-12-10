import React from 'react';
import { Menu } from 'antd';
import useTitleEffect from '@/util/hooks/use-title-effect';

export default function Home() {
  useTitleEffect('首页');
  return (
    <div>
      <Menu />
      明明是首页却一行代码都没写
    </div>
  );
}
