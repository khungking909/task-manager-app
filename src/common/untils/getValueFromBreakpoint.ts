import ResponsiveType from 'src/types/responsive';

const getValueFromBreakpoint = (
  breakpoint: keyof ResponsiveType,
  value: ResponsiveType | string | number | undefined,
) => {
  if (typeof value !== 'object') {
    return value;
  }

  const breakpoints: (keyof ResponsiveType)[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  if (value[breakpoint] !== undefined) {
    return value[breakpoint];
  }

  const currentIndex = breakpoints.indexOf(breakpoint);

  for (let i = currentIndex + 1; i < breakpoints.length; i++) {
    if (value[breakpoints[i]] !== undefined) {
      return value[breakpoints[i]];
    }
  }

  for (let i = currentIndex - 1; i >= 0; i--) {
    if (value[breakpoints[i]] !== undefined) {
      return value[breakpoints[i]];
    }
  }

  if (value['xs'] !== undefined) {
    return value['xs'];
  }

  return undefined;
};

export { getValueFromBreakpoint };
