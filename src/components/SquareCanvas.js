import React from 'react';

function SquareCanvas(props) {
  let canvasRef = React.useRef(null);
  let previousData = React.useRef([]);

  React.useEffect(() => {
    const data = JSON.parse(props.data);
    draw(canvasRef, previousData.current, data, props.tileSize, props.hslData);
    previousData.current = data;
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

const draw = (canvasRef, previousData, data, size, hslData) => {
  if (!data || data.length <= 0 || !previousData[i] || previousData.length <= 0) return;

  const datasetCount = data.length;

  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  context.save();
  context.imageSmoothingEnabled = true;
  context.strokeStyle = 'white';

  for (let i = 0; i < datasetCount; i++) {
    if (!data[i]) continue;

    const dataCount = data[i].length;

    for (let j = 0; j < dataCount; j++) {
      if (
        previousData.length === datasetCount &&
        previousData[i][j] === data[i][j]
      ) {
        continue;
      }

      context.stroke();
      context.fillStyle = `hsl(${hslData[data[i][j]]}, 65%, 55%)`;
      context.fillRect(j * size, i * size, size, size);
    }
  }

  context.restore();
};

export default SquareCanvas;
