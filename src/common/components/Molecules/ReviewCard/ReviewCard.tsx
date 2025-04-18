import { Avatar } from '@components/Atom/Avatar';
import { Box } from '@components/Atom/Box';
import { Rating } from '@components/Atom/Rating';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import { ReviewCardProps } from './type';

const ReviewCard = ({ date, image, name, rate, review }: ReviewCardProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      border={{
        style: 'solid',
        width: '1px',
        color: '#E0E0E0',
      }}
      borderRadius="8px"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{
          sm: Setting.DIGIT_12,
          md: Setting.DIGIT_16,
        }}
        p="16px"
      >
        <Box display="flex" alignItems="center" flexWrap="wrap" gap={Setting.DIGIT_8}>
          <Rating starValue={rate} />
          <Typography color="gray" fontSize={isMobile ? 'sm' : 'base'}>
            {date}
          </Typography>
        </Box>
        <Box
          gap={{
            sm: Setting.DIGIT_8,
            md: Setting.DIGIT_12,
          }}
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" gap={Setting.DIGIT_8} alignItems="center">
            <Avatar image={image} size={isMobile ? 'small' : 'medium'} />
            <Typography fontWeight="semibold">{name}</Typography>
          </Box>
          <Box
            width="100%"
            pl={{
              sm: Setting.DIGIT_8,
              md: Setting.DIGIT_12,
            }}
          >
            <Typography color="gray" fontSize={isMobile ? 'xs' : 'sm'}>
              {review}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ReviewCard };
