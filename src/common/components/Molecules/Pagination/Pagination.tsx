import { Box } from '@components/Atom/Box';
import { ChevronLeft } from '@components/Atom/Icon/icons/ChevronLeft';
import { ChevronRight } from '@components/Atom/Icon/icons/ChevronRight';
import { First } from '@components/Atom/Icon/icons/First';
import { Last } from '@components/Atom/Icon/icons/Last';
import { PaginationItem } from '@components/Atom/PaginationNumberItem/PaginationItem';
import usePaginationNumber from '@components/Molecules/Pagination/Pagination.logic';
import useScreenSize from '@hooks/useScreenSize';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import { PaginationNumberProps } from './type';

const Pagination = ({
  totalPages = 10,
  activePage = 1,
  setActivePage,
  roundness,
  color,
  outline,
  disabled,
  nextPrevButton,
  lastFirstButton,
  ...props
}: PaginationNumberProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  const {
    generatePageNumbers,
    onClickPaginationItemToChangePage,
    onClickNextButton,
    onClickPrevButton,
    onClickLastButton,
    onClickFirstButton,
  } = usePaginationNumber(activePage, totalPages);

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="space-between"
      disabled={disabled}
      gap={isMobile ? '4px' : '16px'}
      {...props}
    >
      {lastFirstButton && (
        <Box
          hover={{ backgroundColor: '#fafafb' }}
          width={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          height={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          borderRadius={roundness === 'circle' ? '50%' : '4px'}
          onClick={() => onClickFirstButton(setActivePage)}
          disabled={activePage === 1}
        >
          <First size={isMobile ? 'large' : 'xLarge'} />
        </Box>
      )}
      {nextPrevButton && (
        <Box
          hover={{ backgroundColor: '#fafafb' }}
          width={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          height={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          borderRadius={roundness === 'circle' ? '50%' : '4px'}
          onClick={() => onClickPrevButton(setActivePage)}
          disabled={activePage === 1}
        >
          <ChevronLeft size={isMobile ? 'medium' : 'large'} />
        </Box>
      )}
      {generatePageNumbers.map((page, index) => (
        <PaginationItem
          key={index}
          roundness={roundness}
          outline={outline}
          active={activePage === page}
          currentPage={page}
          onClick={() => onClickPaginationItemToChangePage(page, setActivePage)}
          color={color}
        />
      ))}
      {nextPrevButton && (
        <Box
          hover={{ backgroundColor: '#fafafb' }}
          width={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          height={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          display="inline-flex"
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
          borderRadius={roundness === 'circle' ? '50%' : '4px'}
          onClick={() => onClickNextButton(totalPages, setActivePage)}
          disabled={activePage === totalPages}
        >
          <ChevronRight size={isMobile ? 'medium' : 'large'} />
        </Box>
      )}
      {lastFirstButton && (
        <Box
          hover={{ backgroundColor: '#fafafb' }}
          width={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          height={{
            xs: Setting.DIGIT_28,
            sm: Setting.DIGIT_32,
            md: Setting.DIGIT_46,
          }}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          borderRadius={roundness === 'circle' ? '50%' : '4px'}
          onClick={() => onClickLastButton(setActivePage)}
          disabled={activePage === totalPages}
        >
          <Last size={isMobile ? 'large' : 'xLarge'} />
        </Box>
      )}
    </Box>
  );
};

export { Pagination };
