import { Box } from '@components/Atom/Box';

const SelectElement = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Box
      p={{
        xs: '6px 12px',
        sm: '8px 16px',
      }}
      hover={{
        backgroundColor: '#F5F5F5',
      }}
      backgroundColor="white"
      transition="background-color 0.2s"
      cursor="pointer"
      {...props}
    >
      {children}
    </Box>
  );
};

export { SelectElement };
