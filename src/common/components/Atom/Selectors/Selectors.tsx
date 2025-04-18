import { Box } from '@components/Atom/Box';
import { SelectItem } from '@components/Atom/SelectItem';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import { SelectorsProps } from './type';

const Selectors = ({ title, value, image, icon, ...props }: SelectorsProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box display="inline-flex" alignItems="center" gap={Setting.DIGIT_8} {...props}>
      <Typography variant="text" fontSize={isMobile ? 'xs' : 'sm'} color="#605F5F">
        {title}
      </Typography>
      <Box display="inline-flex" alignItems="center" gap={Setting.DIGIT_2} cursor="pointer">
        <SelectItem value={value} image={image} />
        {icon}
      </Box>
    </Box>
  );
};

export { Selectors };
