import React from 'react';

function Animation(props) {
  const requestFrameRef = React.useRef();
  const [data, setData] = React.useState([]);

  const updateAnimationState = React.useCallback(() => {
    const results = [];
    props.sorters.forEach((sorter, index) => {
      const result = sorter.next();

      if (!result.done) {
        results[index] = result.value;
      }
    });

    setData(results);

    requestFrameRef.current = requestAnimationFrame(updateAnimationState);
  }, [props.sorters]);

  React.useEffect(() => {
    requestFrameRef.current = requestAnimationFrame(updateAnimationState);
    return () => cancelAnimationFrame(requestFrameRef.current);
  }, [updateAnimationState]);

  return props.canvas(JSON.stringify(data));
}

export default Animation;
