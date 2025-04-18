import image3 from '@assets/yen3.jpg';
import image5 from '@assets/yen5.jpg';
import { Box } from '@components/Atom/Box';
import { Image } from '@components/Atom/Image';
import useScreenSize from '@hooks/useScreenSize';
import useWindowSize from '@hooks/useWindowSize';
import { HTMLAttributes } from 'react';
import { getIsMobile } from 'src/common/untils/isMobile';

const FeatureSection = ({ children }: HTMLAttributes<HTMLElement>) => {
  const { width } = useWindowSize();
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      height={isMobile ? 'auto' : width / 2}
      maxHeight={isMobile ? 'auto' : 600}
      minHeight={300}
      userSelect="text"
      flexDirection={isMobile ? 'column' : 'row'}
      backgroundColor={'#ecf0f1'}
      p={{
        xs: 16,
        sm: '24px 16px',
        md: 32,
        lg: 52,
      }}
      m="0 auto"
      maxWidth={1440}
      minWidth={320}
      gap={{
        sm: 24,
        md: 32,
      }}
    >
      <Box display="flex" alignItems="center" width={isMobile ? '100%' : '50%'}>
        {children}
      </Box>
      <Box
        width={isMobile ? '100%' : '50%'}
        display="flex"
        position="relative"
        minHeight={isMobile ? 300 : 0}
      >
        <Box aspectRatio={'570 / 570'} width={'80%'} height={'90%'} position="absolute" right={0} top={0}>
          <Image src={image3} objectFit={isMobile ? 'cover' : 'fill'} />
        </Box>
        <Box aspectRatio={'337 / 408'} width={'60%'} height={'70%'} position="absolute" bottom={0} left={0}>
          <Image src={image5} objectFit={isMobile ? 'cover' : 'fill'} />
        </Box>
      </Box>
    </Box>
  );
};

export { FeatureSection };
