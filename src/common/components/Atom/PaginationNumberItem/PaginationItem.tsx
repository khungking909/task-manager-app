import { Box } from '@components/Atom/Box';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getIsMobile } from 'src/common/untils/isMobile';
import paginationItemClass from './PaginationNumberItem.module.scss';
import { PaginationNumberItemProps } from './type';

const PaginationItem = ({
  currentPage,
  onClickItem,
  active,
  color,
  roundness = 'square',
  outline,
  ...props
}: PaginationNumberItemProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClickItem}
      className={arrayToString([
        paginationItemClass['pagination__number__item'],
        Number(currentPage) ? paginationItemClass.hover__item : '',
        paginationItemClass[`roundness__${roundness}`],
        active ? paginationItemClass.active : '',
        color ? paginationItemClass[`color__${color}`] : '',
        outline ? paginationItemClass.outline : '',
        outline ? paginationItemClass[`outline__${color}`] : '',
      ])}
      {...props}
    >
      <Typography fontSize={isMobile ? 'sm' : 'lg'} fontWeight="semibold">
        {currentPage}
      </Typography>
    </Box>
  );
};

export { PaginationItem };
