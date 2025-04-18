import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function Last(props: Readonly<Readonly<IconProps>>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
      </svg>
    </Icon>
  );
}
