import { Box } from '@components/Atom/Box';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { getIsMobile } from 'src/common/untils/isMobile';
import { FooterMenuProps } from './type';

const FooterMenu = ({ items = [], title }: FooterMenuProps) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{
        xs: 12,
        sm: 14,
      }}
      width="max-content"
    >
      <Typography variant="h7">{title}</Typography>
      {items.map((item, index) => (
        <Link to={item.url} key={index}>
          <Typography variant="text" color="#576574" fontSize={isMobile ? 'sm' : 'base'}>
            {item.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export { FooterMenu };
