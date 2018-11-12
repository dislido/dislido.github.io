import React, { useState } from 'react';
import { List, Pagination } from 'antd';

const LINE_LENGTH = 50;
const LINES_PER_PAGE = 20;
const linesArray = [...'1'.repeat(LINES_PER_PAGE)];

/**
 * 获得从from开始的num个字符组成的字符串
 * @param {number} from
 * @param {number} num
 */
function getChars(from, num) {
  const codePoints = [];
  for (let i = from, j = num; j--; i++) {
    codePoints.push(i);
  }
  return String.fromCodePoint(...codePoints);
}

function getPage(page) {
  const p = (page - 1) * LINES_PER_PAGE;
  return linesArray.map((value, index) => ({
    line: `${(p + index) * LINE_LENGTH + 1}-${(p + index) * LINE_LENGTH + LINE_LENGTH}`,
    str: getChars((p + index) * LINE_LENGTH + 1, LINE_LENGTH),
  }));
}

export default function Unicode() {
  const [listData, setListData] = useState(getPage(1));

  const onPageChange = page => setListData(getPage(page));

  return (
    <div data-stylefield="wip-unicode">
      <List
        size="small"
        dataSource={listData}
        renderItem={item => (
          <div key={item.line}>
            <b className="left">
              {item.line}
              :
            </b>
            {[...item.str].map(it => (
              <span className="unicodeChar" key={it.codePointAt(0)}>
                {it}
              </span>
            ))}
          </div>
        )}
      />
      <Pagination
        showQuickJumper
        total={65535}
        defaultPageSize={1000}
        onChange={onPageChange}
      />
    </div>
  );
}
