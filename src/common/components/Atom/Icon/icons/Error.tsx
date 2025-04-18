import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function ErrorIcon(props: Readonly<IconProps>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="-2.28882e-05" width="20" height="20" rx="10" fill="#DC3545" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5303 7.53033C13.8232 7.23743 13.8232 6.76256 13.5303 6.46967C13.2374 6.17677 12.7626 6.17677 12.4697 6.46967L9.99999 8.93934L7.53031 6.46967C7.23742 6.17677 6.76254 6.17677 6.46965 6.46967C6.17676 6.76256 6.17676 7.23743 6.46965 7.53033L8.93933 10L6.46965 12.4697C6.17676 12.7626 6.17676 13.2375 6.46965 13.5303C6.76254 13.8232 7.23742 13.8232 7.53031 13.5303L9.99999 11.0607L12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303C13.8232 13.2375 13.8232 12.7626 13.5303 12.4697L11.0606 10L13.5303 7.53033Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
}
