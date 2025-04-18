import { Box } from '@components/Atom/Box';
import { NavigationItem } from '@components/Atom/NavigationItem';
import { NavigationProps } from './type';

const Navigation = ({
  totalPage = 5,
  totalVisiblePage = 3,
  currentPage = 1,
  color,
  variant,
  direction = 'horizontal',
  onClickNavigationItem,
  ...props
}: NavigationProps) => {
  const updateValueArray = (page: number) => {
    const divide = page / totalVisiblePage;

    if (page < 1) return Array.from({ length: totalVisiblePage }, (_, i) => i + 1);

    if (page % totalVisiblePage === 0) {
      return Array.from({ length: totalVisiblePage }, (_, i) => page - i)
        .reverse()
        .filter((value) => value <= totalPage);
    }

    return Array.from(
      { length: totalVisiblePage },
      (_, i) => totalVisiblePage * Math.floor(divide) + i + 1,
    ).filter((value) => value <= totalPage);
  };

  return (
    <Box
      display="inline-flex"
      gap={{
        xs: 10,
        sm: 12,
        md: 16,
      }}
      alignItems="center"
      justifyContent="center"
      flexDirection={direction === 'horizontal' ? 'row' : 'column'}
      {...props}
    >
      {updateValueArray(currentPage).map((value) => (
        <NavigationItem
          key={value}
          variant={variant}
          active={value === currentPage}
          direction={direction}
          color={color}
          onClick={() => onClickNavigationItem && onClickNavigationItem(value)}
        />
      ))}
    </Box>
  );
};

export { Navigation };
