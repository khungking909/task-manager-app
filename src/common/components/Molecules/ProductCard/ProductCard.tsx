import { Badge } from '@components/Atom/Badge';
import { Box } from '@components/Atom/Box';
import { Cart } from '@components/Atom/Icon/icons/Cart';
import { Heart } from '@components/Atom/Icon/icons/Heart';
import { Image } from '@components/Atom/Image';
import { Rating } from '@components/Atom/Rating';
import { Typography, TypographyProps } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { useMemo } from 'react';
import { getValueFromBreakpoint } from 'src/common/untils/getValueFromBreakpoint';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import productCardModuleClass from './ProductCard.module.scss';
import { ProductCardProps } from './type';

const ProductCard = ({
  rate,
  image,
  name,
  price,
  salePrice,
  columns = 1,
  onClickAddToCart,
  onClickAddToFavorite,
}: ProductCardProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  const finalPrice = useMemo(() => {
    return salePrice ? price - salePrice : price;
  }, [price, salePrice]);

  const salePriceValue = useMemo(() => {
    if (!salePrice || salePrice === 0) return;

    return (salePrice / price) * Setting.DIGIT_100;
  }, [price, salePrice]);

  const boxIconSize = useMemo(() => {
    if (columns >= 2 && columns < 5) return isMobile ? 'small' : 'medium';
    if (columns >= 5) return isMobile ? 'xSmall' : 'small';

    return 'medium';
  }, [columns, isMobile]);

  const saleBadgeSize = useMemo(() => {
    if (columns >= 2) return isMobile ? 'small' : 'medium';

    return 'large';
  }, [columns, isMobile]);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={{
        xs: Setting.DIGIT_8,
        sm: Setting.DIGIT_12,
      }}
      hover={{
        scale: 1.05,
      }}
      transition={'scale 0.3s ease-in-out'}
      cursor="pointer"
      userSelect="none"
    >
      <Box aspectRatio="250 / 300" className={productCardModuleClass.product__card__image}>
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
            <Badge color="danger" size={saleBadgeSize}>
              - {salePriceValue.toFixed(0) + Setting.PERCENTAGE_SYMBOL}
            </Badge>
          </Box>
        )}
        <Box
          display="flex"
          flexDirection="column"
          gap={{
            xs: Setting.DIGIT_4,
            sm: Setting.DIGIT_8,
          }}
          className={productCardModuleClass.hover__box}
        >
          <Heart
            box
            boxVariant="circle"
            boxColor="light"
            boxSize={boxIconSize}
            color="dark"
            onClick={(e) => {
              e.preventDefault();

              if (onClickAddToFavorite) {
                onClickAddToFavorite();
              }
            }}
          />
          <Cart
            box
            boxVariant="circle"
            boxColor="light"
            boxSize={boxIconSize}
            color="dark"
            onClick={(e) => {
              e.preventDefault();

              if (onClickAddToCart) {
                onClickAddToCart();
              }
            }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={{
          xs: Setting.DIGIT_4,
          sm: Setting.DIGIT_8,
        }}
      >
        {rate && <Rating starValue={rate} />}
        <Typography
          fontWeight="semibold"
          fontSize={
            getValueFromBreakpoint(responsive, {
              xs: 'sm',
              sm: 'sm',
              md: 'base',
            }) as TypographyProps['fontSize']
          }
          color="black"
        >
          {name}
        </Typography>
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
              ${Number(price).toFixed(2)}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { ProductCard };
