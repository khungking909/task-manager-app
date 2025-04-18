import { Avatar } from '@components/Atom/Avatar';
import { Box } from '@components/Atom/Box';
import { Button } from '@components/Atom/Button';
import { Logout } from '@components/Atom/Icon/icons/Logout';
import { Message } from '@components/Atom/Icon/icons/Message';
import { Phone } from '@components/Atom/Icon/icons/Phone';
import { Profile } from '@components/Atom/Icon/icons/Profile';
import { Setting as SettingIcon } from '@components/Atom/Icon/icons/Setting';
import { Typography } from '@components/Atom/Typography';
import { UserDropdownProps } from '@components/Molecules/UserDropdown/type';
import useScreenSize from '@hooks/useScreenSize';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authApi from 'src/app/apis/authApi';
import { removeUser } from 'src/app/slices/authSlice/authSlice';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';

const UserDropdown = ({ name, avatar, email }: Readonly<UserDropdownProps>) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(authApi.util.resetApiState());
    dispatch(removeUser());
    document.body.style.overflow = '';
    navigate('/login');
  };

  return (
    <Box display="flex" flexDirection="column" gap={Setting.DIGIT_16} minWidth={isMobile ? '200px' : '300px'}>
      <Link to="/profile">
        <Box display="flex" gap={Setting.DIGIT_8} alignItems="center" overflow="hidden">
          <Avatar image={avatar} size={isMobile ? 'medium' : 'large'} />
          <Box display="flex" flexDirection="column" gap={isMobile ? Setting.DIGIT_4 : Setting.DIGIT_8}>
            <Typography fontWeight="semibold" color="black">
              {name}
            </Typography>
            <Typography color="black">{email}</Typography>
          </Box>
        </Box>
      </Link>
      <Box display="flex" flexDirection="column" gap={Setting.DIGIT_8}>
        <Button
          fullWidth
          roundness="rounded"
          size="small"
          IconLeft={<Profile size="xLarge" />}
          color="dark"
          align="left"
        >
          {t('users.view_profile')}
        </Button>
        <Button
          fullWidth
          roundness="rounded"
          size="small"
          IconLeft={<SettingIcon size="xLarge" />}
          color="dark"
          align="left"
        >
          {t('users.settings')}
        </Button>
      </Box>
      <Box width="100%" backgroundColor="gray" height={2}></Box>
      <Box display="flex" flexDirection="column" gap={Setting.DIGIT_8}>
        <Button
          fullWidth
          roundness="rounded"
          size="small"
          IconLeft={<Phone size="xLarge" />}
          color="dark"
          align="left"
        >
          {t('users.subscription')}
        </Button>
        <Button
          fullWidth
          roundness="rounded"
          size="small"
          IconLeft={<Message size="xLarge" />}
          color="dark"
          align="left"
        >
          {t('users.community')}
        </Button>
      </Box>
      <Box width="100%" backgroundColor="gray" height={2}></Box>
      <Box display="flex" flexDirection="column" gap={Setting.DIGIT_8}>
        <Button
          fullWidth
          roundness="rounded"
          size="small"
          IconLeft={<Logout size="xLarge" />}
          color="dark"
          align="left"
          onClick={handleLogout}
        >
          {t('users.sign_out')}
        </Button>
      </Box>
    </Box>
  );
};

export { UserDropdown };
