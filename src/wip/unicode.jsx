import React from 'react';
import { List, Pagination } from 'antd';

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
const LINE_LENGTH = 50;
const LINES_PER_PAGE = 20;
const linesArray = [...'1'.repeat(LINES_PER_PAGE)];

export default class Unicode extends React.Component {
  constructor() {
    super();
    const listData = linesArray.map((value, index) => ({
      line: `${index * LINE_LENGTH + 1}-${index * LINE_LENGTH + LINE_LENGTH}`,
      str: getChars(index * LINE_LENGTH + 1, LINE_LENGTH),
    }));
    this.state = {
      listData,
    };
  }

  onPageChange = (page) => {
    const p = (page - 1) * LINES_PER_PAGE;
    const listData = linesArray.map((value, index) => ({
      line: `${(p + index) * LINE_LENGTH + 1}-${(p + index) * LINE_LENGTH + LINE_LENGTH}`,
      str: getChars((p + index) * LINE_LENGTH + 1, LINE_LENGTH),
    }));
    this.setState({ listData });
  };

  render() {
    const { listData } = this.state;
    return (
      <div data-stylefield="wip-unicode">
        <List
          size="small"
          dataSource={listData}
          renderItem={item => (
            <div>
              <b className="left">
                {item.line}
                :
              </b>
              {[...item.str].map(it => (
                <span className="unicodeChar">
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
          style={{ textAlign: 'center' }}
          onChange={this.onPageChange}
        />
      </div>
    );
  }
}
