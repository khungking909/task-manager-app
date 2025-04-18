import { Box } from '@components/Atom/Box';
import { Image } from '@components/Atom/Image';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import { SelectItemProps } from './type';

const SelectItem = ({ value, image, ...props }: SelectItemProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box cursor="pointer" display="inline-flex" alignItems="center" gap={Setting.DIGIT_8} {...props}>
      {image && (
        <Box width={Setting.DIGIT_18} height={Setting.DIGIT_14} outline="0.5px solid #EAE8E8">
          <Image src={image} />
        </Box>
      )}
      {value && (
        <Typography
          lineHeight={!isMobile ? Setting.DIGIT_24 : Setting.DIGIT_22}
          fontSize={isMobile ? 'sm' : 'base'}
          fontWeight="premium"
          fontFamily="space-grote"
        >
          {value}
        </Typography>
      )}
    </Box>
  );
};

export { SelectItem };
