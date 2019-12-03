import React from 'react';

const TILE_SIZE = 20;
const TILE_PER_ROW = Math.floor(window.innerWidth / TILE_SIZE);
const ROW_COUNT = Math.floor(window.innerHeight / TILE_SIZE);

function SquareCanvas(props) {
  let canvasRef = React.useRef(null);

  React.useEffect(() => {
    draw(canvasRef, props.data);
  });

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}

const draw = (canvasRef, data) => {
  data = data.split(',');
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  context.save();

  for (let i = 0; i < ROW_COUNT; i++) {
    for (let j = 0; j < TILE_PER_ROW; j++) {
      context.fillStyle = `hsl(${(data[j] / TILE_PER_ROW) * 360}, 100%, 50%)`;
      context.fillRect(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  context.restore();
};

export default SquareCanvas;
