import React from 'react';
import { Card } from 'antd';
import './imagecard.less';

export default React.memo((props) => {
  const {
    backgroundImage, bodyStyle, text, ...cardProps
  } = props;
  return (
    <Card
      hoverable
      bodyStyle={{
        height: '100%',
        background: `url('${backgroundImage}') #F7F7F7 no-repeat center / contain`,
        ...bodyStyle,
      }}
      {...cardProps}
    >
      <div className="imagecard">
        <h3>
          {text}
        </h3>
      </div>
    </Card>
  );
});
