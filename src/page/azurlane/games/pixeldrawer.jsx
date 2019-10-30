import React, { useState } from 'react';
import { Input, Popconfirm } from 'antd';
import InputGroupAddon from '@/component/inputgroup-addon';
import './pixeldrawer.less';

const defaultColors = ['#ffffff', '#322829', '#ffd370', '#75fcad', '#7184fd', '#ff6f96', '#fcd7c7'];
function initCanvas() {
  const init = [];
  for (let i = 0; i < 22; i++) {
    const line = new Array(37);
    line.fill(null);
    init.push(line);
  }
  return init;
}
function useColor() {
  const [currentColor, setCurrentColor] = useState('#ffffff');
  const [colorList, setColorList] = useState(defaultColors);
  return {
    currentColor,
    setCurrentColor,
    colorList,
    addColor: () => {
      if (!currentColor || colorList.includes(currentColor) || colorList.length >= 37) return;
      colorList.push(currentColor);
      setColorList([...colorList]);
    },
    deleteColor: () => {
      if (!currentColor) return;
      colorList.splice(colorList.indexOf(currentColor), 1);
      setColorList([...colorList]);
    },
    isColorSaved: colorList.includes(currentColor),
  };
}
/**
 * @todo 画布格子的点击事件交给画布处理
 */
export default function PixelDrawer() {
  const [lines, setLines] = useState(initCanvas());
  const [backgroundColor, setBackgroundColor] = useState('#bdadad');
  const {
    currentColor, setCurrentColor, colorList, addColor, deleteColor, isColorSaved,
  } = useColor();
  const draw = (e) => {
    const [x, y] = e.target.dataset.pos.split(' ');
    /** @todo use immutable */
    const newLines = [];
    lines.forEach(l => newLines.push(l));
    newLines[y][x] = currentColor;
    setLines(newLines);
  };
  const clearCanvas = () => setLines(initCanvas());
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
          {currentColor !== null && (
            <Input
              type="button"
              style={{ width: 108 }}
              value={isColorSaved ? '从调色板删除' : '添加到调色板'}
              onClick={isColorSaved ? deleteColor : addColor}
            />
          )}
          <Popconfirm title="确认清空画布？" onConfirm={clearCanvas}>
            <Input type="button" style={{ width: 80 }} value="清空画布" />
          </Popconfirm>
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
