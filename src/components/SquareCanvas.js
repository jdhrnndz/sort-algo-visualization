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
  const datasetCount = data.length;

  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  context.save();
  context.imageSmoothingEnabled = true;

  for (let i = 0; i < datasetCount; i++) {
    if (!data[i]) continue;

    const dataCount = data[i].length;

    for (let j = 0; j < dataCount; j++) {
      context.fillStyle = `hsl(${(data[i][j] / dataCount) * 320}, 65%, 55%)`;
      context.fillRect(j * size, i * size, size, size);
    }
  }

  context.restore();
};

export default SquareCanvas;
