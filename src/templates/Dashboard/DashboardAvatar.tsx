import { Avatar, Box, Image, Typography } from '@components/Atom';
import useScreenSize from '@hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { getIsMobile } from 'src/common/untils/isMobile';
import { ScreenPath } from 'src/constants/screen';
import { Setting } from 'src/constants/setting';
import { DashboardAvatarProps } from 'src/templates/Dashboard/type';

export default function DashboardAvatar({ name, avatar, email }: DashboardAvatarProps) {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
      {!isMobile && (
        <Link to={ScreenPath.HOME}>
          <Box width={60} height={60} position="relative" display="flex" alignItems="center">
            <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/22a3ab16269821.562a8602153f7.png" />
          </Box>
        </Link>
      )}
      <Box display="flex" gap={Setting.DIGIT_8} alignItems="center" overflow="hidden">
        <Avatar image={avatar} size={isMobile ? 'medium' : 'large'} />
        <Box display="flex" flexDirection="column" gap={isMobile ? Setting.DIGIT_4 : Setting.DIGIT_8}>
          <Typography fontWeight="semibold" color="black">
            {name}
          </Typography>
          <Typography color="black">{email}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
