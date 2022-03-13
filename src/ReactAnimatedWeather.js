import React, { useRef, useEffect } from 'react';
import ReactAnimatedWeather from 'ReactAnimatedWeather';

function setIcon(icon, animate, skyconIcon, canvas) {
  skyconIcon.add(canvas, Skycons[icon]);
  if (animate) {
    skyconIcon.play();
  }
}

const ReactAnimatedWeather = ({
  icon, color, size, animate
}) => {
  const skyconCanvas = useRef(null);

  useEffect(() => {
    const skyconIcon = new Skycons({ color, resizeClear: true });
    const canvas = skyconCanvas.current;
    setIcon(icon, animate, skyconIcon, canvas);

    return () => {
      skyconIcon.remove(canvas);
    };
  }, [icon, color, animate, size]);

  return <canvas ref={skyconCanvas} width={size} height={size} />;
};

ReactAnimatedWeather.defaultProps = {
  animate: true,
  size: 64,
  color: 'black'
};

ReactAnimatedWeather.propTypes = {
  icon: PropTypes.oneOf([
    'CLEAR_DAY',
    'CLEAR_NIGHT',
    'PARTLY_CLOUDY_DAY',
    'PARTLY_CLOUDY_NIGHT',
    'CLOUDY',
    'RAIN',
    'SLEET',
    'SNOW',
    'WIND',
    'FOG'
  ]).isRequired,
  animate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default ReactAnimatedWeather;