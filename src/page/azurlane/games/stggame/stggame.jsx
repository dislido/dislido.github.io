import React, { useState, useEffect } from 'react';

export default function STGGame() {
  const [gameCtrler, setGameCtrler] = useState({});
  const { loadFinished } = gameCtrler;
  useEffect(() => {
    import('./game').then((game) => {
      setGameCtrler(game.default);
    });
  }, []);
  if (!loadFinished) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div>
        <p>控制台</p>
      </div>
      <canvas width="800" height="480" />
    </>
  );
}
