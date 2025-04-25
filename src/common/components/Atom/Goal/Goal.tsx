import { css } from '@emotion/css';
import { useEffect, useRef } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import goalModuleClass from './Goal.module.scss';
import { GoalProps } from './type';

const Goal = ({ value = '0%', color = 'black' }: GoalProps) => {
  const goalProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (goalProgressRef.current) {
      goalProgressRef.current.style.width = value;
    }
  }, [value]);

  return (
    <div className={goalModuleClass.goal}>
      <div
        ref={goalProgressRef}
        className={arrayToString([
          css`
            background-color: ${color};
          `,
          goalModuleClass['goal__progress'],
        ])}
      />
    </div>
  );
};

export { Goal };
