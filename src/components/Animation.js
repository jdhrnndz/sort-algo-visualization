import React from 'react';
import SquareCanvas from './SquareCanvas';

function Animation(props) {
  const requestFrameRef = React.useRef();
  const [data, setData] = React.useState('');

  const updateAnimationState = React.useCallback(() => {
    const result = props.sort.next();

    if (result.done) {
      return console.log('done!');
    }

    setData(result.value.join(','));

    requestFrameRef.current = requestAnimationFrame(updateAnimationState);
  }, [props.sort]);

  React.useEffect(() => {
    requestFrameRef.current = requestAnimationFrame(updateAnimationState);
    return () => cancelAnimationFrame(requestFrameRef.current);
  }, [updateAnimationState]);

  return <SquareCanvas data={data} />;
}

export default Animation;
