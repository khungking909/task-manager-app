import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function HamburgerColumns(props: Readonly<IconProps>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.896 8H19.896"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.896 16H19.896"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
}
