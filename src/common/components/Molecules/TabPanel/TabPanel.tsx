import { Box } from '@components/Atom/Box';
import tabPanelModuleClass from './TabPanel.module.scss';
import { TabPanelProps } from './type';

const TabPanel = ({ tabPanelIndex, activeTab, children, ...props }: TabPanelProps) => {
  return (
    <Box
      className={tabPanelModuleClass.tab__panel}
      display={activeTab === tabPanelIndex ? 'block' : 'none'}
      {...props}
    >
      {children}
    </Box>
  );
};

export { TabPanel };
