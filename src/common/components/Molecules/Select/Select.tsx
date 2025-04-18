import { Box } from '@components/Atom/Box';
import { Selectors } from '@components/Atom/Selectors';
import useScreenSize from '@hooks/useScreenSize';
import React, { forwardRef, useMemo } from 'react';
import { addPx } from 'src/common/untils/addPx';
import { getValueFromBreakpoint } from 'src/common/untils/getValueFromBreakpoint';
import { Setting } from 'src/constants/setting';
import { SelectProps } from './type';

const SelectElement = forwardRef((props: SelectProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { active, elementSpacingTop, selectorTitle, value, image, selectorIcon, children, ...rest } = props;
  const responsive = useScreenSize();

  const top = useMemo(() => {
    return elementSpacingTop
      ? `calc(100% + ${addPx(getValueFromBreakpoint(responsive, elementSpacingTop))})`
      : '100%';
  }, [elementSpacingTop, responsive]);

  return (
    <Box position="relative" userSelect="none" ref={ref} {...rest}>
      <Selectors title={selectorTitle} value={value} image={image} icon={selectorIcon} />
      <Box position="absolute" top={top} zIndex={Setting.DIGIT_2} display={active ? 'block' : 'none'}>
        {children}
      </Box>
    </Box>
  );
});

SelectElement.displayName = 'Select';

export { SelectElement as Select };
