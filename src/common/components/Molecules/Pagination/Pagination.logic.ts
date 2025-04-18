import { useMemo } from 'react';

export default function usePagination(currentPage: number, totalPages: number) {
  const onClickPaginationItemToChangePage = (
    page: number | string,
    setActivePage: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (Number(page)) {
      setActivePage(Number(page));
    }
  };

  const onClickPrevButton = (setActivePage: React.Dispatch<React.SetStateAction<number>>) => {
    if (currentPage > 1) {
      setActivePage(currentPage - 1);
    }
  };

  const onClickFirstButton = (setActivePage: React.Dispatch<React.SetStateAction<number>>) => {
    if (currentPage > 1) {
      setActivePage(1);
    }
  };

  const onClickLastButton = (setActivePage: React.Dispatch<React.SetStateAction<number>>) => {
    if (currentPage < totalPages) {
      setActivePage(totalPages);
    }
  };

  const onClickNextButton = (
    totalPages: number,
    setActivePage: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (currentPage < totalPages) {
      setActivePage(currentPage + 1);
    }
  };

  const generatePageNumbers = useMemo(() => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pageNumbers: (number | string)[] = [];

    const addEllipsis = () => {
      if (pageNumbers[pageNumbers.length - 1] !== '...') {
        pageNumbers.push('...');
      }
    };

    if (currentPage <= 2) {
      pageNumbers.push(1, 2, 3);
      addEllipsis();
      pageNumbers.push(totalPages);
    } else if (currentPage === 3) {
      pageNumbers.push(1);
      pageNumbers.push(2, 3, 4);
      addEllipsis();
      pageNumbers.push(totalPages);
    } else if (currentPage >= 4 && currentPage <= totalPages - 2) {
      pageNumbers.push(1);
      addEllipsis();
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      addEllipsis();
      pageNumbers.push(totalPages);
    } else {
      pageNumbers.push(1);
      addEllipsis();
      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return pageNumbers;
  }, [currentPage, totalPages]);

  return {
    generatePageNumbers,
    onClickPaginationItemToChangePage,
    onClickPrevButton,
    onClickNextButton,
    onClickFirstButton,
    onClickLastButton,
  };
}
