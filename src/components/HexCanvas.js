import React from 'react';

function SquareCanvas(props) {
  let canvasRef = React.useRef(null);
  let previousData = React.useRef([]);

  React.useEffect(() => {
    const data = JSON.parse(props.data);
    draw(canvasRef, previousData.current, data, props.tileSize);
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

const draw = (canvasRef, previousData, data, size) => {
  if (!data || data.length <= 0) return;

  const datasetCount = data.length;

  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  context.save();
  context.imageSmoothingEnabled = true;
  context.strokeStyle = 'white';

  const halfSize = size / 2;
  const hexSubpath = `l -${halfSize} ${halfSize} v ${halfSize} l ${halfSize} ${halfSize} l ${halfSize} -${halfSize} v -${halfSize} Z`;

  for (let i = 0; i < datasetCount; i++) {
    if (!data[i]) continue;

    const dataCount = data[i].length;
    const rem = i % 2;

    for (let j = 0; j < dataCount; j++) {
      if (
        previousData.length === datasetCount &&
        previousData[i][j] === data[i][j]
      ) {
        continue;
      }

      const hexSVG = `M${j * size + halfSize * rem} ${i * size} ${hexSubpath}`;
      const hexPath = new Path2D(hexSVG);

      context.beginPath();
      context.fillStyle = `hsl(${(data[i][j] / dataCount) * 320}, 65%, 55%)`;
      context.fill(hexPath);
      context.stroke(hexPath);
    }
  }

  context.restore();
};

export default SquareCanvas;
