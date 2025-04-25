import { Box, Typography } from '@components/Atom';
import { Goal } from '@components/Atom/Goal';
import { Menu } from '@components/Atom/Icon/icons/Menu';
import { TaskProgressProps } from '@components/Molecules/TaskProgress/type';
import useScreenSize from '@hooks/useScreenSize';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import { dashboardTemplateConstant } from 'src/templates/Dashboard/constant';

const TaskProgress = ({ name, description }: TaskProgressProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const randomNumber = Math.floor(Math.random() * dashboardTemplateConstant.taskInProgressBgColor.length);

  return (
    <Box
      p={isMobile ? Setting.DIGIT_16 : Setting.DIGIT_24}
      display="flex"
      flexDirection="column"
      backgroundColor={dashboardTemplateConstant.taskInProgressBgColor[randomNumber]}
      borderRadius={10}
      gap={isMobile ? Setting.DIGIT_12 : Setting.DIGIT_16}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="gray">{name}</Typography>
        <Menu />
      </Box>
      <Typography variant={isMobile ? 'h7' : 'h6'}>{description}</Typography>
      <Goal value="50%" color="#130f40" />
    </Box>
  );
};

export { TaskProgress };
