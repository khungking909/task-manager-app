import ResponsiveType from 'src/types/responsive';

const getValueFromBreakpoint = (
  breakpoint: keyof ResponsiveType,
  value: ResponsiveType | string | number | undefined,
) => {
  if (typeof value !== 'object') {
    return value;
  }

  if (value[breakpoint] !== undefined) {
    return value[breakpoint];
  }

  const breakpoints: (keyof ResponsiveType)[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  if (breakpoint === 'xs') {
    const largerBreakpoints = breakpoints.slice(breakpoints.indexOf(breakpoint) + 1);
    for (let i = 0; i < largerBreakpoints.length; i++) {
      const nextBreakpoint = largerBreakpoints[i];
      if (value[nextBreakpoint] !== undefined) {
        return value[nextBreakpoint];
      }
    }
  }

  if (breakpoint === 'xl') {
    const smallerBreakpoints = breakpoints.slice(0, breakpoints.indexOf(breakpoint)).reverse();
    for (let i = 0; i < smallerBreakpoints.length; i++) {
      const prevBreakpoint = smallerBreakpoints[i];
      if (value[prevBreakpoint] !== undefined) {
        return value[prevBreakpoint];
      }
    }
  }
};

export { getValueFromBreakpoint };
