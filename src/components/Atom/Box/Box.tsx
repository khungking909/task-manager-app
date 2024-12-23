import { css } from '@emotion/css';
import useScreenSize from '@hooks/useScreenSize';
import { useMemo } from 'react';
import { getValueFromBreakpoint } from 'src/utils/getValueFromBreakpoint';
import { BoxProps } from './type';
import { addPx } from 'src/utils/addPx';

const Box = ({
  position,
  top,
  bottom,
  left,
  right,
  p,
  pt,
  pr,
  pl,
  pb,
  m,
  mt,
  mr,
  ml,
  mb,
  backgroundColor,
  width,
  height,
  maxHeight,
  maxWidth,
  boxSizing,
  borderRadius,
  border,
  overflow,
  transform,
  transition,
  shadow,
  zIndex,
  cursor,
  aspectRatio,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
}: BoxProps) => {
  const responsive = useScreenSize();
  const { style: borderStyle, color: borderColor, width: borderWidth } = border || {};

  const positionValue = useMemo(() => {
    if (typeof position !== 'object') {
      return position;
    }

    return getValueFromBreakpoint(responsive, position);
  }, [responsive, position]);

  return (
    <div
      className={css`
        background-color: ${getValueFromBreakpoint(responsive, backgroundColor)};
        position: ${positionValue};
        top: ${addPx(getValueFromBreakpoint(responsive, top))};
        left: ${addPx(getValueFromBreakpoint(responsive, left))};
        bottom: ${addPx(getValueFromBreakpoint(responsive, bottom))};
        right: ${addPx(getValueFromBreakpoint(responsive, right))};
        width: ${addPx(getValueFromBreakpoint(responsive, width))};
        height: ${addPx(getValueFromBreakpoint(responsive, height))};
        padding: ${addPx(getValueFromBreakpoint(responsive, p))};
        padding-top: ${addPx(getValueFromBreakpoint(responsive, pt))};
        padding-right: ${addPx(getValueFromBreakpoint(responsive, pr))};
        padding-bottom: ${addPx(getValueFromBreakpoint(responsive, pb))};
        padding-left: ${addPx(getValueFromBreakpoint(responsive, pl))};
        margin: ${addPx(getValueFromBreakpoint(responsive, m))};
        margin-top: ${addPx(getValueFromBreakpoint(responsive, mt))};
        margin-right: ${addPx(getValueFromBreakpoint(responsive, mr))};
        margin-bottom: ${addPx(getValueFromBreakpoint(responsive, mb))};
        margin-left: ${addPx(getValueFromBreakpoint(responsive, ml))};
        max-width: ${addPx(getValueFromBreakpoint(responsive, maxWidth))};
        max-height: ${addPx(getValueFromBreakpoint(responsive, maxHeight))};
        min-width: ${addPx(getValueFromBreakpoint(responsive, maxWidth))};
        min-height: ${addPx(getValueFromBreakpoint(responsive, maxHeight))};
        box-sizing: ${boxSizing};
        border-radius: ${addPx(getValueFromBreakpoint(responsive, borderRadius))};
        border-style: ${borderStyle};
        border-color: ${getValueFromBreakpoint(responsive, borderColor)};
        border-width: ${addPx(getValueFromBreakpoint(responsive, borderWidth))};
        overflow: ${overflow};
        transform: ${getValueFromBreakpoint(responsive, transform)};
        transition: ${getValueFromBreakpoint(responsive, transition)};
        box-shadow: ${getValueFromBreakpoint(responsive, shadow)};
        z-index: ${getValueFromBreakpoint(responsive, zIndex)};
        cursor: ${cursor};
        aspect-ratio: ${getValueFromBreakpoint(responsive, aspectRatio)};
        display: ${display};
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        gap: ${addPx(getValueFromBreakpoint(responsive, gap))};
      `}
    >
      {children}
    </div>
  );
};

export { Box };
