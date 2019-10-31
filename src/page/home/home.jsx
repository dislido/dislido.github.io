import React from 'react';
import useTitleEffect from '@/util/hooks/use-title-effect';
import '../../web-component/japari-text';

export default function Home() {
  useTitleEffect('首页');
  return (
    <div>
      <japari-text text="DisLido" style={{ fontSize: '48px' }} />
      施工中......
    </div>
  );
}
