import { Box } from '@components/Atom/Box';
import { Add } from '@components/Atom/Icon/icons/Add';
import { Minus } from '@components/Atom/Icon/icons/Minus';
import { css } from '@emotion/css';
import useScreenSize from '@hooks/useScreenSize';
import { useCallback, useMemo, useState } from 'react';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import { QuantitySelectorProps } from './type';

const QuantitySelector = ({
  quantity = 1,
  fill,
  max = 9999999,
  min = 1,
  onChangeQuantity,
}: QuantitySelectorProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const [quantityValue, setQuantityValue] = useState<number | string>(quantity);

  const widthInput = useMemo(() => {
    if (fill) return '100%';

    if (quantityValue.toString().length > Setting.DIGIT_3) return isMobile ? '24px' : '32px';

    if (quantityValue.toString().length > 0) return `${quantityValue.toString().length * 8}px`;

    return '8px';
  }, [fill, isMobile, quantityValue]);

  const onChangeQuantityHandler = useCallback(
    (value: number) => {
      setQuantityValue(value);

      if (onChangeQuantity) {
        onChangeQuantity(value);
      }
    },
    [onChangeQuantity],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const value = Number(targetValue);

    if (!isNaN(value) && value >= min) {
      if (value > max) {
        onChangeQuantityHandler(max);
        return;
      }

      onChangeQuantityHandler(value);
      return;
    }

    setQuantityValue('');
    onChangeQuantityHandler(0);
  };

  const onBlurWhenInputEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '' || e.target.value === '0') {
      e.target.value = min.toString();
      onChangeQuantityHandler(min);
    }
  };

  const onMinusClick = () => {
    const value = Number(quantityValue) - 1;

    if (value < min) {
      onChangeQuantityHandler(min);
      return;
    }

    onChangeQuantityHandler(value);
  };

  const onAddClick = () => {
    const value = Number(quantityValue) + 1;

    if (value > max) {
      onChangeQuantityHandler(max);
      return;
    }

    onChangeQuantityHandler(value);
  };

  return (
    <Box
      p={{
        sm: '12px 16px',
        md: '14px 20px',
      }}
      display="inline-flex"
      alignItems="center"
      justifyContent="space-between"
      borderRadius={100}
      backgroundColor={'#f1f2f6'}
      gap={16}
      className={css`
        width: ${fill ? '100%' : 'fit-content'};
      `}
    >
      <Minus onClick={onMinusClick} disabled={quantityValue === min} />
      <input
        className={css`
          width: ${widthInput};
          font-size: ${isMobile ? '11px' : '14px'};
        `}
        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key)}
        onChange={handleInputChange}
        value={quantityValue}
        onBlur={onBlurWhenInputEmpty}
      ></input>
      <Add onClick={onAddClick} disabled={quantityValue === max} />
    </Box>
  );
};

export { QuantitySelector };
