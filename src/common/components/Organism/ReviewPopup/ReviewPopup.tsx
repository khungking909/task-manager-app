import { Box } from '@components/Atom/Box';
import { Button } from '@components/Atom/Button';
import { Form } from '@components/Atom/Form';
import { Close } from '@components/Atom/Icon/icons/Close';
import { Photo } from '@components/Atom/Icon/icons/Photo';
import { Image } from '@components/Atom/Image';
import { Rating } from '@components/Atom/Rating';
import { TextArea } from '@components/Atom/TextArea';
import { Typography } from '@components/Atom/Typography';
import { Carousel } from '@components/Organism/Carousel';
import useScreenSize from '@hooks/useScreenSize';
import { useForm } from 'react-hook-form';
import { getIsMobile } from 'src/common/untils/isMobile';
import reviewPopupModuleClass from './ReviewPopup.module.scss';
import { ReviewPopupProps } from './type';

const ReviewPopup = ({ closeModal }: ReviewPopupProps) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      className={reviewPopupModuleClass.review__popup}
      p={{
        sm: '16px',
        md: '24px 16px',
        lg: '24px',
      }}
    >
      <Box display="flex" flexDirection="column" gap="16px">
        <Box
          display="flex"
          flexDirection="column"
          gap={{
            sm: '4px',
            md: '6px',
          }}
        >
          <Box display="flex" alignItems="center" gap="8px" justifyContent="space-between">
            <Typography fontWeight="semibold" fontSize="xl">
              Leave a review
            </Typography>
            <Close size="xLarge" onClick={closeModal} />
          </Box>
          <Typography fontSize="xs" color="gray">
            Write your review about our products
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={{
            sm: '6px',
            md: '8px',
          }}
        >
          <Typography fontSize="xs">Your rating *</Typography>
          <Rating allowHover />
        </Box>
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            gap={{
              sm: 12,
              md: 16,
            }}
          >
            <Box height={200}>
              <TextArea
                placeholder="Your review"
                {...register('review')}
                errorMessage={errors['review']?.message as string | undefined}
              />
            </Box>
            <Carousel slidesPerView={3} spaceBetween={16}>
              <Image src={'123'} />
              <Image src={'123'} />
              <Image src={'123'} />
              <Image src={'123'} />
              <Image src={'123'} />
            </Carousel>
            <Box
              display="flex"
              alignItems="center"
              gap={{
                sm: 6,
                md: 8,
              }}
              flexWrap="wrap"
              justifyContent={isMobile ? 'center' : 'flex-end'}
            >
              <Button IconLeft={<Photo />} size="small" roundness="rounded">
                Add photos
              </Button>
              <Button color="dark" size="small" roundness="rounded" type="submit">
                Submit review
              </Button>
            </Box>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export { ReviewPopup };
