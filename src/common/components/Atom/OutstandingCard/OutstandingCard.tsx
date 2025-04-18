import { Box } from '@components/Atom/Box';
import { Image } from '@components/Atom/Image';
import { Tag } from '@components/Atom/Tag';
import { Typography } from '@components/Atom/Typography';
import { OutstandingCardProps } from './type';

const OutstandingCard = ({ zoomScale, name, image }: OutstandingCardProps) => {
  return (
    <Box
      width={{
        xs: 250,
        sm: 281,
        md: 312,
        lg: 357,
      }}
      height={{
        xs: 310,
        sm: 330,
        md: 360,
        lg: 420,
      }}
      position="relative"
      overflow="hidden"
      cursor="pointer"
    >
      <Box
        hover={{ scale: zoomScale ? 1.2 : 1 }}
        transition={zoomScale ? 'scale 0.2s ease-in-out' : ''}
        height="100%"
      >
        <Image src={image} />
      </Box>
      <Box
        position="absolute"
        bottom={{
          xs: 16,
          sm: 24,
          md: 32,
          lg: 40,
        }}
        left="50%"
        transform="translateX(-50%)"
      >
        <Tag roundness="pill" color="light">
          <Typography variant="text" fontWeight="semibold">
            {name}
          </Typography>
        </Tag>
      </Box>
    </Box>
  );
};

export { OutstandingCard };
