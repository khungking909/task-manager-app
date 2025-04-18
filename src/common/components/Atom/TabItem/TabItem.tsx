import { Box } from '@components/Atom/Box';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import tabItemModuleClass from './TabItem.module.scss';
import { TabItemProps } from './type';

const TabItem = ({ active, title, ...props }: TabItemProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      cursor="pointer"
      className={arrayToString([tabItemModuleClass.tab__item, active ? tabItemModuleClass.active : ''])}
      {...props}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pb={{
          sm: Setting.DIGIT_14,
          md: Setting.DIGIT_20,
        }}
      >
        <Typography
          fontSize={isMobile ? 'base' : 'lg'}
          fontFamily="space-grote"
          color={active ? '#000000' : 'gray'}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export { TabItem };
