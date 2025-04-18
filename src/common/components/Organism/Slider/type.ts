import ResponsiveType from 'src/types/responsive';

export interface SliderProps {
  readonly imageList: string[] | ResponsiveType[];
  readonly autoPlay?: boolean;
  readonly autoPlaySpeed?: number;
  readonly direction?: 'horizontal' | 'vertical';
}
