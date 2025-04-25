export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly slidesPerView?: number | 'auto';
  readonly spaceBetween?: number;
  readonly autoPlay?: boolean;
  readonly loop?: boolean;
  readonly autoPlayInterval?: number;
  readonly mousewheel?: boolean;
  readonly direction?: 'horizontal' | 'vertical';
  readonly keyboard?: boolean;
  readonly navigation?: boolean;
  readonly navigationColor?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info';
  readonly elementCenter?: boolean;
}
