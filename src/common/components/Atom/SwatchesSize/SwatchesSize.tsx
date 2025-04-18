import { Box } from '@components/Atom/Box';
import { Typography } from '@components/Atom/Typography';
import { arrayToString } from 'src/common/untils/arrayToString';
import swatchesSizeModuleClass from './SwatchesSize.module.scss';
import { SwatchesSizeProps } from './type';

const SwatchesSize = ({ sizeValue, size = 'medium', active, ...props }: SwatchesSizeProps) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      className={arrayToString([
        swatchesSizeModuleClass.swatches,
        swatchesSizeModuleClass[`size__${size}`],
        active ? swatchesSizeModuleClass.active : '',
      ])}
      {...props}
    >
      <Typography>{sizeValue}</Typography>
    </Box>
  );
};

export { SwatchesSize };
