import { Box } from '@components/Atom/Box';
import { TabsProps } from './type';

const Tabs = ({ children = [], onChangeTab }: TabsProps) => {
  const onChangeTabHandler = (value: number) => {
    if (onChangeTab) {
      onChangeTab(value);
    }
  };

  return (
    <Box display="flex" width="100%">
      {children.map((child, index) => {
        return (
          <Box key={`tab_item ${index}`} width="100%" onClick={() => onChangeTabHandler(index)}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

export { Tabs };
