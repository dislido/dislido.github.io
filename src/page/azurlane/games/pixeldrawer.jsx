import React, { useState } from 'react';
import { Input } from 'antd';
import InputGroupAddon from '@/component/inputgroup-addon';
import './pixeldrawer.less';

const defaultColors = ['#ffffff', '#322829', '#ffd370', '#75fcad', '#7184fd', '#ff6f96', '#fcd7c7'];
const init = [];
for (let i = 0; i < 22; i++) {
  const line = new Array(37);
  line.fill(null);
  init.push(line);
}

/**
 * @todo 画布格子的点击事件交给画布处理
 */
export default function PixelDrawer() {
  const [lines, setLines] = useState(init);
  const [currentColor, setCurrentColor] = useState('#ffffff');
  const [backgroundColor, setBackgroundColor] = useState('#bdadad');
  const [colorList, setColorList] = useState(defaultColors);
  const addColor = () => {
    if (!currentColor || colorList.includes(currentColor) || colorList.length >= 37) return;
    colorList.push(currentColor);
    setColorList(colorList);
  };
  const deleteColor = () => {
    colorList.splice(colorList.indexOf(currentColor), 1);
    setColorList(colorList);
  };
  const draw = (e) => {
    const [x, y] = e.target.dataset.pos.split(' ');
    lines[y][x] = currentColor;
    setLines(lines);
  };
  return (
    <div>
      <div>
        <Input.Group className="margin8">
          <InputGroupAddon value="当前颜色：" style={{ width: 94 }} />
          <Input
            type="color"
            value={currentColor}
            onChange={e => setCurrentColor(e.target.value)}
            style={{ width: 60 }}
            className={currentColor ? '' : 'input-color-eraser'}
          />
          <Input type="button" style={{ width: 108 }} value="添加到调色板" onClick={addColor} />
          <Input type="button" style={{ width: 108 }} value="从调色板删除" onClick={deleteColor} />
        </Input.Group>
        <Input.Group className="margin8">
          <InputGroupAddon value="背景颜色：" style={{ width: 94 }} />
          <Input
            type="color"
            value={backgroundColor}
            onChange={e => setBackgroundColor(e.target.value)}
            style={{ width: 60 }}
          />
        </Input.Group>
        <Input.Group className="margin8">
          <InputGroupAddon value="调色板：" size="small" style={{ width: 72 }} />
          <Input
            type="button"
            size="small"
            onClick={() => setCurrentColor(null)}
            style={{ width: 24, paddingLeft: 4 }}
            value="⌧"
          />
          {colorList.map(color => (
            <Input
              type="button"
              size="small"
              key={color}
              onClick={() => setCurrentColor(color)}
              style={{ width: 24, backgroundColor: color }}
            />
          ))}
        </Input.Group>
      </div>
      <div className="pixel-drawer" style={{ backgroundColor }}>
        {lines.map((l, y) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={y}>
            {l.map((pixel, x) => (
              // eslint-disable-next-line react/no-array-index-key
              <button key={x} type="button" data-pos={`${x} ${y}`} onClick={draw} style={{ backgroundColor: pixel }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
