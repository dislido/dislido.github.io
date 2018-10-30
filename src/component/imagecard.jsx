import React from 'react';
import { Card } from 'antd';

export default class ImageCard extends React.PureComponent {
  render() {
    const { cardProps, imgNode, hoverNode } = this.props;
    return (
      <Card
        bodyStyle={{ display: 'none' }}
        {...cardProps}
        cover={(
          <div>
            {imgNode}
            <div style={{ position: 'absolute', left: 0, bottom: 0 }}>
              {hoverNode}
            </div>
          </div>
        )}
      />
    );
  }
}
