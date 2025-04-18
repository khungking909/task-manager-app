import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function First(props: Readonly<Readonly<IconProps>>) {
  return (
    <Icon {...props}>
      <svg
        width="100%"
        height="100%"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="FirstPageIcon"
      >
        <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
      </svg>
    </Icon>
  );
}
