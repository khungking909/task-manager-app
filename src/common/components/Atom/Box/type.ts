import { HTMLAttributes } from 'react';
import ResponsiveType from 'src/types/responsive';

export type BorderType = {
  readonly style?:
    | 'solid'
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'
    | 'none';

  readonly width?: number | string | ResponsiveType;

  readonly color?: string | ResponsiveType;
};

export type FlexType = {
  readonly direction?: 'row' | 'column';

  readonly justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

  readonly align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

  readonly wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';

  readonly gap?: string | ResponsiveType;
};

interface HoverEffect {
  scale?: number;
  rotate?: string;
  backgroundColor?: string;
}

interface BackgroundImageType {
  readonly url: string;
  readonly size?: 'cover' | 'contain';
  readonly position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  readonly repeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  readonly position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | ResponsiveType;
  readonly backgroundColor?: string | ResponsiveType;
  readonly top?: number | string | ResponsiveType;
  readonly right?: number | string | ResponsiveType;
  readonly bottom?: number | string | ResponsiveType;
  readonly left?: number | string | ResponsiveType;
  readonly width?: number | string | ResponsiveType;
  readonly height?: number | string | ResponsiveType;
  readonly p?: string | number | ResponsiveType;
  readonly pt?: string | number | ResponsiveType;
  readonly pr?: string | number | ResponsiveType;
  readonly pb?: string | number | ResponsiveType;
  readonly pl?: string | number | ResponsiveType;
  readonly m?: string | number | ResponsiveType;
  readonly mt?: string | number | ResponsiveType;
  readonly mr?: string | number | ResponsiveType;
  readonly ml?: string | number | ResponsiveType;
  readonly mb?: string | number | ResponsiveType;
  readonly maxWidth?: string | number | ResponsiveType;
  readonly maxHeight?: string | number | ResponsiveType;
  readonly minWidth?: string | number | ResponsiveType;
  readonly minHeight?: string | number | ResponsiveType;
  readonly boxSizing?: 'content-box' | 'border-box';
  readonly borderRadius?: string | number | ResponsiveType;
  readonly border?: BorderType;
  readonly overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'clip' | 'unset';
  readonly transform?: string | ResponsiveType;
  readonly transition?: string | ResponsiveType;
  readonly shadow?: string | ResponsiveType;
  readonly zIndex?: number | ResponsiveType;
  readonly cursor?: 'pointer' | 'default' | 'auto' | 'none';
  readonly aspectRatio?: string | ResponsiveType;
  readonly outline?: string | ResponsiveType;
  readonly display?:
    | 'flex'
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'grid'
    | 'none'
    | 'table'
    | 'table-row'
    | 'table-cell'
    | 'contents'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'inherit'
    | 'initial'
    | 'unset';
  readonly flexDirection?: 'row' | 'column';
  readonly justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  readonly alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  readonly flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  readonly gap?: number | string | ResponsiveType;
  readonly userSelect?: 'none' | 'auto' | 'text' | 'all' | 'contain' | 'inherit' | 'initial' | 'unset';
  readonly hover?: HoverEffect;
  readonly columns?: number | ResponsiveType;
  readonly rowGap?: number | string | ResponsiveType;
  readonly columnGap?: number | string | ResponsiveType;
  readonly autoFlow?: 'row' | 'column';
  readonly disabled?: boolean;
  readonly order?: number | ResponsiveType;
  readonly flexGrow?: number | ResponsiveType;
  readonly flexShrink?: number | ResponsiveType;
  readonly flexBasis?: number | string | ResponsiveType;
  readonly backgroundImage?: BackgroundImageType;
}
