import React, { useState } from 'react';
import './pixeldrawer.less';

const init = [];
for (let i = 0; i < 22; i++) {
  const line = new Array(37);
  line.fill(null);
  init.push(line);
}

// 37*22
export default function PixelDrawer() {
  const [lines, setLines] = useState(init);
  const [currentColor] = useState('#000000');
  const draw = (y, x) => {
    lines[y][x] = currentColor;
    setLines(lines);
  };
  return (
    <div>
      wip
      <div className="pixel-drawer">
        {lines.map((l, y) => (
          <div>
            {l.map((pixel, x) => (
              <button type="button" onClick={() => draw(y, x)} style={{ backgroundColor: pixel }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
