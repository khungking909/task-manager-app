import { Badge } from '@components/Atom/Badge';
import { Box } from '@components/Atom/Box';
import { Button } from '@components/Atom/Button';
import { Image } from '@components/Atom/Image';
import { Rating } from '@components/Atom/Rating';
import { Typography, TypographyProps } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getValueFromBreakpoint } from 'src/common/untils/getValueFromBreakpoint';
import { Setting } from 'src/constants/setting';
import { ProductCellProps } from './type';

const ProductCell = ({
  image,
  name,
  price,
  rate,
  salePrice,
  description,
  onClickAddToCart,
}: ProductCellProps) => {
  const responsive = useScreenSize();
  const { t } = useTranslation();

  const finalPrice = useMemo(() => {
    return salePrice ? price - salePrice : price;
  }, [price, salePrice]);

  const salePriceValue = useMemo(() => {
    if (!salePrice || salePrice === 0) return;

    return (salePrice / price) * Setting.DIGIT_100;
  }, [price, salePrice]);

  return (
    <Box
      display="flex"
      p={{
        md: '16px 46px',
        lg: '24px 52px',
      }}
      alignItems="center"
      gap={{
        md: Setting.DIGIT_32,
        lg: Setting.DIGIT_40,
      }}
      cursor="pointer"
    >
      <Box aspectRatio="220 / 300" maxWidth={220} position={'relative'}>
        <Image src={image} />
        {salePriceValue && (
          <Box
            position={'absolute'}
            top={{
              xs: Setting.DIGIT_8,
              sm: Setting.DIGIT_10,
              md: Setting.DIGIT_16,
            }}
            left={{
              xs: Setting.DIGIT_8,
              sm: Setting.DIGIT_10,
              md: Setting.DIGIT_16,
            }}
          >
            <Badge color="danger" size={'large'}>
              - {salePriceValue.toFixed(0) + Setting.PERCENTAGE_SYMBOL}
            </Badge>
          </Box>
        )}
      </Box>
      <Box display="flex" flexDirection="column" gap={Setting.DIGIT_16} width="100%">
        <Box display="flex" gap={Setting.DIGIT_8} flexDirection="column">
          <Typography color="black">{name}</Typography>
          <Box
            display="flex"
            alignItems="center"
            gap={{
              xs: Setting.DIGIT_4,
              sm: Setting.DIGIT_8,
              md: Setting.DIGIT_12,
            }}
          >
            <Typography
              fontSize={
                getValueFromBreakpoint(responsive, {
                  xs: 'sm',
                  sm: 'sm',
                  md: 'base',
                }) as TypographyProps['fontSize']
              }
              fontWeight="semibold"
              color="black"
            >
              ${finalPrice.toFixed(2)}
            </Typography>
            {salePrice && (
              <Typography
                fontSize={
                  getValueFromBreakpoint(responsive, {
                    xs: 'sm',
                    sm: 'sm',
                    md: 'base',
                  }) as TypographyProps['fontSize']
                }
                color="gray"
                textDecoration="line-through"
              >
                ${price}
              </Typography>
            )}
          </Box>
        </Box>
        {rate && <Rating starValue={rate} />}
        <Typography
          fontSize={
            getValueFromBreakpoint(responsive, {
              sm: 'sm',
              md: 'base',
            }) as TypographyProps['fontSize']
          }
          color="gray"
        >
          {description}
        </Typography>
        <Box display="flex" flexDirection="column" gap={Setting.DIGIT_8}>
          <Button size="small" roundness="rounded" color="dark" fullWidth onClick={onClickAddToCart}>
            {t('products.add_to_cart')}
          </Button>
          <Button size="small" roundness="rounded" color="info" fullWidth>
            {t('products.like')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { ProductCell };
