import { Box } from '@components/Atom/Box';
import { SidebarProps } from './type';

const Sidebar = ({ children, backgroundColor }: SidebarProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      backgroundColor={backgroundColor}
      p={{
        xs: 12,
        sm: 16,
        md: '24px 16px',
        lg: 24,
      }}
    >
      {children}
    </Box>
  );
};

export { Sidebar };
