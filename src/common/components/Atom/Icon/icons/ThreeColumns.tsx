import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function ThreeColumns(props: Readonly<IconProps>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.75 3C8.16421 3 8.5 3.33579 8.5 3.75V19.75C8.5 20.1642 8.16421 20.5 7.75 20.5C7.33579 20.5 7 20.1642 7 19.75V3.75C7 3.33579 7.33579 3 7.75 3ZM11.75 3C12.1642 3 12.5 3.33579 12.5 3.75V19.75C12.5 20.1642 12.1642 20.5 11.75 20.5C11.3358 20.5 11 20.1642 11 19.75V3.75C11 3.33579 11.3358 3 11.75 3ZM16.5 3.75C16.5 3.33579 16.1642 3 15.75 3C15.3358 3 15 3.33579 15 3.75V19.75C15 20.1642 15.3358 20.5 15.75 20.5C16.1642 20.5 16.5 20.1642 16.5 19.75V3.75Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
