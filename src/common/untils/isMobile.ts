import ResponsiveType from 'src/types/responsive';

export const getIsMobile = (value: keyof ResponsiveType) => {
  return value === 'xs' || value === 'sm';
};
