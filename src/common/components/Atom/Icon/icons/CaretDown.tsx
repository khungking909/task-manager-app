import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function CaretDown(props: Readonly<Readonly<IconProps>>) {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <polygon points="50,85 10,25 90,25" fill="black" />
      </svg>
    </Icon>
  );
}
