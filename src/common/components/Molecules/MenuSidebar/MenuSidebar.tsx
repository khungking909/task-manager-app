import { Box } from '@components/Atom/Box';
import { Button } from '@components/Atom/Button';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { ScreenPath } from 'src/constants/screen';

const MenuSidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Box
      flexDirection="column"
      width="100%"
      overflow="hidden"
      backgroundColor={'gray-100'}
      p={{ sm: '0 16px 16px', md: '0 52px 24px' }}
    >
      <Link to={ScreenPath.HOME}>
        <Button fullWidth align="left" color={location.pathname === ScreenPath.HOME ? 'danger' : 'light'}>
          {t('home')}
        </Button>
      </Link>
      <Link to={ScreenPath.PRODUCT}>
        <Button fullWidth align="left" color={location.pathname === ScreenPath.PRODUCT ? 'danger' : 'light'}>
          {t('product')}
        </Button>
      </Link>
      <Link to={ScreenPath.NEWS}>
        <Button fullWidth align="left" color={location.pathname === ScreenPath.NEWS ? 'danger' : 'light'}>
          {t('news')}
        </Button>
      </Link>
      <Link to={ScreenPath.CONTACT}>
        <Button fullWidth align="left" color={location.pathname === ScreenPath.CONTACT ? 'danger' : 'light'}>
          {t('contact')}
        </Button>
      </Link>
    </Box>
  );
};

export { MenuSidebar };
