import { Box } from '@components/Atom/Box';
import { css } from '@emotion/css';
import { arrayToString } from 'src/common/untils/arrayToString';
import swatchesColorModuleClass from './SwatchesColor.module.scss';
import { SwatchesColorProps } from './type';

const SwatchesColor = ({ size = 'medium', color, active, ...props }: SwatchesColorProps) => {
  return (
    <Box
      className={arrayToString([
        css`
          background-color: ${color};
        `,
        swatchesColorModuleClass.swatches,
        swatchesColorModuleClass[`size__${size}`],
        active ? swatchesColorModuleClass.active : '',
      ])}
      {...props}
    />
  );
};

export { SwatchesColor };
