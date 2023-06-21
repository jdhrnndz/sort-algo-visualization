import React from 'react';

function CircleCanvas(props) {
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
  if (!data || data.length <= 0) return;

  const datasetCount = data.length;

  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  context.save();
  context.imageSmoothingEnabled = true;
  context.strokeStyle = 'white';

  const halfSize = Math.round(size / 2);
  const radius = halfSize - 2;
  const fullCircle = Math.round(2 * Math.PI);

  for (let i = 0; i < datasetCount; i++) {
    if (!data || data.length <= 0 || !previousData || previousData.length <= 0) continue;

    const dataCount = data[i].length;

    for (let j = 0; j < dataCount; j++) {
      if (
        !!previousData &&
        previousData.length === datasetCount &&
        previousData[i][j] === data[i][j]
      ) {
        continue;
      }

      context.beginPath();
      context.arc(
        j * size + halfSize,
        i * size + halfSize,
        radius,
        0,
        fullCircle
      );
      context.stroke();
      context.fillStyle = `hsl(${hslData[data[i][j]]}, 65%, 55%)`;
      context.fill();
    }
  }

  context.restore();
};

export default CircleCanvas;
