import React, { useState } from 'react';

/**
 * 一个人带一只鸡，一只狗，一条鱼，一只鸭子和一缸米过河。
 * 没人的时候，鸡会打狗，狗会摸鱼。
 * 鸭子不在的时候人会吃米。
 * 狗和鸭子独处会打架，但是鸭子在船上会肝砍口垒所以不会和狗打架。
 * 人和狗或者人和鸭子在船上时，人会被丢下去。
 * 已知人，鸭子和鸡和狗都能开船，船上最多装两个东西，问如何让所有东西平安过河。
 */
export default function YwwuyiGame() {
  const [left, setLeft] = useState(['人', '鸡', '狗', '鱼', '鸭子', '米']);
  const [boat, setBoat] = useState([]);
  const [right, setRight] = useState([]);
  const [boatPos, setBoatPos] = useState(false);
  const [err, setErr] = useState('');
  const [forseUpdate, setForseUpdate] = useState(0);

  const setAreas = (l, b, r) => {
    setLeft(l);
    setBoat(b);
    setRight(r);
    setForseUpdate(forseUpdate + 1);
  };

  function check() {
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

  function move(from, to, index) {
    if (to === 1 && boat.length === 2) return;
    if (!boatPos && from === 2) return;
    if (boatPos && from === 0) return;
    const areas = [left, boat, right];
    areas[to].push(areas[from].splice(index, 1)[0]);
    setAreas(left, boat, right);
    setErr(null);
    const checkResult = check();
    if (checkResult.length) {
      areas[from].push(areas[to].pop());
      setAreas(left, boat, right);
      setErr(checkResult.join(' '));
    }
  }

  function moveBoat() {
    setBoatPos(!boatPos);
  }

  return (
    <>
      <pre>
        {`
 一个人带一只鸡，一只狗，一条鱼，一只鸭子和一缸米过河。
 没人的时候，鸡会打狗，狗会摸鱼。
 鸭子不在的时候人会吃米。
 狗和鸭子独处会打架，但是鸭子在船上会肝砍口垒所以不会和狗打架。
 人和狗或者人和鸭子在船上时，人会被丢下去。
 已知人，鸭子和鸡和狗都能开船，船上最多装两个东西，问如何让所有东西平安过河。`}
      </pre>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 50, border: '#000 1px solid' }}>
          {left.map((it, index) => (
            <div key={it} onClick={() => move(0, 1, index)} style={{ width: '50px', backgroundColor: '#DDD' }}>
              {it}
            </div>
          ))}
        </div>
        <div style={{ width: 80, border: '#000 1px solid', textAlign: boatPos ? 'right' : 'left' }}>
          <div>
          船
            {boat.some(it => ['人', '鸡', '狗', '鸭子'].includes(it))
          && <button type="button" onClick={moveBoat}>开船</button>}
          </div>
          {boat.map((it, index) => (
            <div
              key={it}
              onClick={() => move(1, boatPos ? 2 : 0, index)}
              style={{ width: '50px', backgroundColor: '#DDD', display: 'inline-block' }}
            >
              {it}
            </div>
          ))}
        </div>
        <div style={{ width: 50, border: '#000 1px solid' }}>
          {right.map((it, index) => (
            <div key={it} onClick={() => move(2, 1, index)} style={{ width: '50px', backgroundColor: '#DDD' }}>
              {it}
            </div>
          ))}
        </div>
        {err && <p>{err}</p>}
      </div>
    </>
  );
}
