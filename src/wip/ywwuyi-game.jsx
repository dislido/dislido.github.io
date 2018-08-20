import React from 'react';

export default class YwwuyiGame extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      left: ['人', '鸡', '狗', '鱼', '鸭子', '米'],
      boat: [],
      right: [],
      boatPos: false,
    };
  }

  check() {
    const { left, boat, right } = this.state;
    return [left, boat, right].map((area, index) => {
      if (!area.includes('人')) {
        if (area.includes('鸡') && area.includes('狗')) {
          return '鸡会打狗';
        }
        if (area.includes('鱼') && area.includes('狗')) {
          return '狗会摸鱼';
        }
      }
      if (!area.includes('鸭子') && area.includes('人') && area.includes('米')) {
        return '人会吃米';
      }
      if (index !== 1 && area.includes('狗') && area.includes('鸭子') && !area.includes('人') && !area.includes('鸡')) {
        return '狗和鸭子会打架';
      }
      if (index === 1 && area.includes('人')) {
        if (area.includes('狗') || area.includes('鸭子')) return '人会被丢下去';
      }
      return null;
    }).filter(it => it !== null);
  }

  move(from, to, index) {
    const {
      left, boat, right, boatPos,
    } = this.state;
    if (to === 1 && boat.length === 2) return;
    if (!boatPos && from === 2) return;
    if (boatPos && from === 0) return;
    const areas = [left, boat, right];
    areas[to].push(areas[from].splice(index, 1)[0]);
    this.setState({
      left, boat, right, err: null,
    });
    const checkResult = this.check();
    if (checkResult.length) {
      areas[from].push(areas[to].pop());
      this.setState({
        left, boat, right, err: checkResult.join(' '),
      });
    }
  }

  moveBoat() {
    const { boatPos } = this.state;
    this.setState({ boatPos: !boatPos });
  }

  render() {
    const {
      left, right, boat, boatPos, err,
    } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: 50, border: '#000 1px solid' }}>
          {left.map((it, index) => (
            <div key={it} onClick={() => this.move(0, 1, index)} style={{ width: '50px', backgroundColor: '#DDD' }}>
              {it}
            </div>
          ))}
        </div>
        <div style={{ width: 80, border: '#000 1px solid', textAlign: boatPos ? 'right' : 'left' }}>
          <div>
            船
            {boat.some(it => ['人', '鸡', '狗', '鸭子'].includes(it))
            && <button type="button" onClick={() => this.moveBoat()}>开船</button>}
          </div>
          {boat.map((it, index) => (
            <div
              key={it}
              onClick={() => this.move(1, boatPos ? 2 : 0, index)}
              style={{ width: '50px', backgroundColor: '#DDD', display: 'inline-block' }}
            >
              {it}
            </div>
          ))}
        </div>
        <div style={{ width: 50, border: '#000 1px solid' }}>
          {right.map((it, index) => (
            <div key={it} onClick={() => this.move(2, 1, index)} style={{ width: '50px', backgroundColor: '#DDD' }}>
              {it}
            </div>
          ))}
        </div>
        {err && <p>{err}</p>}
      </div>
    );
  }
}
