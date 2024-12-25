import { css } from '@emotion/css';
import useScreenSize from '@hooks/useScreenSize';
import clsx from 'clsx';
import { useMemo } from 'react';
import { addPx } from 'src/utils/addPx';
import { getValueFromBreakpoint } from 'src/utils/getValueFromBreakpoint';
import gridClassModule from './Grid.module.scss';
import { GridProps } from './type';

const Grid = ({ columns, autoFlow = 'row', gap, columnGap, rowGap, children, ...props }: GridProps) => {
  const responsive = useScreenSize();

  const gridClass = useMemo(() => {
    return [
      gridClassModule['grid-container'],
      gridClassModule[`grid-flow--${autoFlow}`],
      columns && gridClassModule[`cols-${getValueFromBreakpoint(responsive, columns)}`],
    ]
      .join(' ')
      .trim();
  }, [autoFlow, columns, responsive]);
  return (
    <div
      className={clsx(
        css`
          row-gap: ${addPx(getValueFromBreakpoint(responsive, rowGap))};
          column-gap: ${addPx(getValueFromBreakpoint(responsive, columnGap))};
          gap: ${addPx(getValueFromBreakpoint(responsive, gap))};
        `,
        gridClass,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Grid };
