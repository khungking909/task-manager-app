import { Box } from '@components/Atom/Box';
import { SelectElementsProps } from '@components/Atom/SelectElements/type';
import useScreenSize from '@hooks/useScreenSize';
import { useMemo } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import selectElementsModuleClass from './SelectElements.module.scss';

const SIZE_MOBILE = Setting.DIGIT_38;
const SIZE_PC = Setting.DIGIT_40;

const SelectElements = ({
  numberVisible = 4,
  maxContent,
  children,
  className = '',
  ...props
}: SelectElementsProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  const maxHeightElement = useMemo(() => {
    return isMobile ? SIZE_MOBILE * numberVisible : SIZE_PC * numberVisible;
  }, [isMobile, numberVisible]);

  return (
    <Box
      minWidth={maxContent ? 'max-content' : Setting.DIGIT_114}
      display="inline-flex"
      flexDirection="column"
      maxHeight={maxHeightElement}
      overflow="auto"
      className={arrayToString([selectElementsModuleClass.select__elements, className])}
      {...props}
    >
      {children}
    </Box>
  );
};

export { SelectElements };
