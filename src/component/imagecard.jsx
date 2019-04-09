import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './imagecard.less';

const ImageCard = React.memo((props) => {
  const {
    backgroundImage, bodyStyle, text, ...cardProps
  } = props;
  return (
    <Card
      hoverable
      bodyStyle={{
        height: '100%',
        background: '#F7F7F7 no-repeat center / contain',
        backgroundImage: backgroundImage && `url('${backgroundImage}')`,
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

ImageCard.propTypes = {
  backgroundImage: PropTypes.string,
  bodyStyle: PropTypes.object,
  text: PropTypes.string,
};
ImageCard.defaultProps = {
  backgroundImage: null,
  bodyStyle: {},
  text: null,
};

export default ImageCard;
