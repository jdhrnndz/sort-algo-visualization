import React from 'react';

function SquareCanvas(props) {
  let canvasRef = React.useRef(null);

  React.useEffect(() => {
    draw(canvasRef, props.data, props.tileSize);
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

const draw = (canvasRef, data, size) => {
  if (!data || data.length <= 0) return;
  data = JSON.parse(data);
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  context.save();

  for (let i = 0; i < data.length; i++) {
    if (!data[i]) continue;
    for (let j = 0; j < data[i].length; j++) {
      context.beginPath();

      context.fillStyle = `hsl(${(data[i][j] / data[i].length) *
        320}, 100%, 50%)`;

      context.fillRect(j * size, i * size, size, size);
    }
  }

  context.restore();
};

export default SquareCanvas;
