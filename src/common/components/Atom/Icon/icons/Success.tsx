import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function Success(props: Readonly<IconProps>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" rx="18" fill="#1BA97F" />
        <path
          d="M12.7109 18L16.4609 21.75L23.9609 14.25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
}
