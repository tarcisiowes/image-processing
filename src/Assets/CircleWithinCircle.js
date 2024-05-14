import React from 'react';
import {Circle, Svg} from 'react-native-svg';

const CircleWithinCircle = () => (
  <Svg height="68" width="68">
    <Circle cx="34" cy="34" fill="#FFF" r="28" />
    <Circle
      cx="34"
      cy="34"
      fill="transparent"
      r="32"
      stroke="#fff"
      strokeWidth="2"
    />
  </Svg>
);

export default CircleWithinCircle;
