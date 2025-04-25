import { Box, Image, Typography } from '@components/Atom';
import { CircularProgress } from '@components/Atom/CircularProgress';
import { ProjectProps } from '@components/Molecules/Project/type';
import useScreenSize from '@hooks/useScreenSize';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';

const Project = ({ name, completedPercent = 0, totalTasks }: ProjectProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      p={isMobile ? Setting.DIGIT_16 : Setting.DIGIT_24}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#ffffff"
      borderRadius={10}
      gap={isMobile ? Setting.DIGIT_12 : Setting.DIGIT_16}
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        gap={isMobile ? Setting.DIGIT_12 : Setting.DIGIT_16}
      >
        <Box maxWidth={isMobile ? 50 : 80} maxHeight={isMobile ? 50 : 80} borderRadius={10} overflow="hidden">
          <Image src="" />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography fontSize={isMobile ? 'base' : 'xl'} fontWeight="semibold" color="black">
            {name}
          </Typography>
          <Typography fontSize={isMobile ? 'sm' : 'base'} color="gray">
            {totalTasks} task
          </Typography>
        </Box>
      </Box>
      <CircularProgress percentage={completedPercent} color="dark" size="xSmall" />
    </Box>
  );
};

export { Project };
