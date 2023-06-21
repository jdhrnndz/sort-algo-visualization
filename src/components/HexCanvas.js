import React from 'react';

function HexCanvas(props) {
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

  const halfSize = size / 2;
  const columnOffset = size / 4;
  const rowOffset = size / 4;
  const offset = size / 2;
  const hexSubpath = `v ${halfSize} l ${halfSize} ${offset} l ${halfSize} -${offset} v -${halfSize} l -${halfSize} -${offset} Z`;

  for (let i = 0; i < datasetCount; i++) {
    if (!data || data.length <= 0) return;

    const dataCount = data[i].length;
    const rem = i % 2;

    for (let j = 0; j < dataCount; j++) {
      if (
        previousData.length === datasetCount &&
        previousData[i][j] === data[i][j]
      ) {
        continue;
      }

      const hexSVG = `M
        ${j * size + halfSize * rem - columnOffset} ${i * size + rowOffset}
        ${hexSubpath}
      `;
      const hexPath = new Path2D(hexSVG);

      context.beginPath();
      context.fillStyle = `hsl(${hslData[data[i][j]]}, 65%, 55%)`;
      context.fill(hexPath);
      context.stroke(hexPath);
    }
  }

  context.restore();
};

export default HexCanvas;
