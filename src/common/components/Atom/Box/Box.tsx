import { css } from '@emotion/css';
import useScreenSize from '@hooks/useScreenSize';
import { forwardRef, useMemo } from 'react';
import { addPx } from 'src/common/untils/addPx';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getValueFromBreakpoint } from 'src/common/untils/getValueFromBreakpoint';
import boxModuleClass from './Box.module.scss';
import { BoxProps } from './type';

const BoxComponent = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
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
      minWidth,
      minHeight,
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
      flexGrow,
      flexBasis,
      flexShrink,
      flexWrap,
      userSelect,
      children,
      className = '',
      hover,
      autoFlow,
      columns,
      rowGap,
      columnGap,
      outline,
      disabled,
      order,
      backgroundImage,
      ...props
    }: BoxProps,
    ref,
  ) => {
    const responsive = useScreenSize();
    const { style: borderStyle, color: borderColor, width: borderWidth } = border || {};
    const { scale = 1, backgroundColor: hoverBackgroundColor } = hover || {};
    const {
      url: backgroundImg,
      position: backgroundImagePosition,
      repeat: backgroundImageRepeat,
      size: backgroundImageSize,
    } = backgroundImage || {};

    const positionValue = useMemo(() => {
      if (typeof position !== 'object') {
        return position;
      }

      return getValueFromBreakpoint(responsive, position);
    }, [responsive, position]);

    const gridClass = useMemo(() => {
      return [
        boxModuleClass['grid-container'],
        boxModuleClass[`grid-flow--${autoFlow}`],
        columns && boxModuleClass[`cols-${getValueFromBreakpoint(responsive, columns)}`],
      ]
        .join(' ')
        .trim();
    }, [autoFlow, columns, responsive]);

    return (
      <div
        ref={ref}
        className={arrayToString([
          css`
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
            min-width: ${addPx(getValueFromBreakpoint(responsive, minWidth))};
            min-height: ${addPx(getValueFromBreakpoint(responsive, minHeight))};
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
            order: ${getValueFromBreakpoint(responsive, order)};
            gap: ${addPx(getValueFromBreakpoint(responsive, gap))};
            row-gap: ${addPx(getValueFromBreakpoint(responsive, rowGap))};
            flex-grow: ${getValueFromBreakpoint(responsive, flexGrow)};
            flex-basis: ${addPx(getValueFromBreakpoint(responsive, flexBasis))};
            flex-shrink: ${getValueFromBreakpoint(responsive, flexShrink)};
            flex-wrap: ${flexWrap};
            column-gap: ${addPx(getValueFromBreakpoint(responsive, columnGap))};
            user-select: ${userSelect};
            outline: ${getValueFromBreakpoint(responsive, outline)};
            background-image: ${backgroundImg ? `url(${backgroundImg})` : ''};
            background-size: ${backgroundImageSize};
            background-position: ${backgroundImagePosition};
            background-repeat: ${backgroundImageRepeat};
            :hover {
              scale: ${hover ? scale : 'none'};
              background-color: ${hover ? getValueFromBreakpoint(responsive, hoverBackgroundColor) : ''};
            }
          `,
          display === 'grid' ? gridClass : '',
          disabled ? boxModuleClass.disabled : '',
          className,
        ])}
        {...props}
      >
        {children}
      </div>
    );
  },
);

BoxComponent.displayName = 'Box';

export { BoxComponent as Box };
