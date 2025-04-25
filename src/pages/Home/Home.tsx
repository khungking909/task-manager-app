import { Box, Button, Image, Typography } from '@components/Atom';
import { ArrowRight } from '@components/Atom/Icon/icons/ArrowRight';
import useScreenSize from '@hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { getIsMobile } from 'src/common/untils/isMobile';
import { ScreenPath } from 'src/constants/screen';
import { Setting } from 'src/constants/setting';

export default function Home() {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      position={'relative'}
      height={'100vh'}
      width={'100vw'}
      overflow={'hidden'}
      display="flex"
      justifyContent="center"
      minWidth={Setting.MIN_WIDTH}
      maxWidth={Setting.MAX_WIDTH}
      m={'0 auto'}
    >
      <Box position={'absolute'} top={0} left={0} right={0} bottom={0} zIndex={-1}>
        <Image
          src={'https://www.figma.com/community/resource/24577293-73e5-4a35-940e-a9ce55ff8863/thumbnail'}
        />
      </Box>
      <Box
        position={'absolute'}
        width={'100%'}
        bottom={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={isMobile ? Setting.DIGIT_16 : Setting.DIGIT_24}
        pb={isMobile ? Setting.DIGIT_52 : Setting.DIGIT_72}
        maxWidth={isMobile ? Setting.WIDTH_SP : Setting.WIDTH_PC}
        justifyContent="center"
      >
        <Typography variant={isMobile ? 'h5' : 'h4'} textAlign="center">
          Task Manager & To-Do List
        </Typography>
        <Typography variant="text" color="gray" textAlign="center">
          Organize your tasks and projects
        </Typography>
        <Link to={ScreenPath.DASHBOARD}>
          <Button
            color="success"
            roundness={isMobile ? 'pill' : 'rounded'}
            IconRight={<ArrowRight />}
            fullWidth={isMobile}
          >
            Let&lsquo;s started
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
