import useIsMobile from '@hooks/useIsMobile';

type ResponsiveValue = number | string | { sp: number | string; pc: number | string } | undefined;

export default function useSelectedResponsive() {
  const isMobile = useIsMobile();

  return (value: ResponsiveValue) => {
    if (typeof value === 'object') {
      return isMobile ? value.sp : value.pc;
    }

    return value;
  };
}
