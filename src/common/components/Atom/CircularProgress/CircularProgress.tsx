import { CircularProgressConstants } from '@components/Atom/CircularProgress/constant';
import { CircularProgressProps } from '@components/Atom/CircularProgress/type';
import React, { useEffect, useRef } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import { Setting } from 'src/constants/setting';
import circularProgressModuleClass from './CircularProgress.module.scss';

export const CircularProgress: React.FC<CircularProgressProps> = ({
  color = 'light',
  percentage,
  size = 'medium',
}) => {
  const circleProgressRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (circleProgressRef.current) {
      const offset =
        CircularProgressConstants.DASH_ARRAY - (CircularProgressConstants.DASH_ARRAY * percentage) / 100;
      circleProgressRef.current.style.strokeDashoffset = `${offset > 0 ? offset : CircularProgressConstants.OFFSET_VALUE_DEFAULT}px`;
    }
  }, [percentage]);

  return (
    <div
      className={arrayToString([
        circularProgressModuleClass['circular__progress'],
        circularProgressModuleClass[`circular__progress--${color}`],
        circularProgressModuleClass[`size--${size}`],
      ])}
    >
      <svg className={circularProgressModuleClass['circle']} viewBox="0 0 120 120">
        <circle className={circularProgressModuleClass['bg']}></circle>
        <circle className={circularProgressModuleClass['progress']} ref={circleProgressRef}></circle>
      </svg>
      <div className={circularProgressModuleClass['percentage']}>
        {percentage + Setting.PERCENTAGE_SYMBOL}
      </div>
    </div>
  );
};
