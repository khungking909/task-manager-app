import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function EyeClose(props: Readonly<Readonly<IconProps>>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1C9.54346 7.82395 14.3192 7.50751 22 1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.50023 4.00066L1.40014 8.30047" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9.59616" y1="6.12669" x2="8.75154" y2="11.0548" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.9997 5.99994L14.9998 10.9999" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.5073 3.99512L21.0001 8.49942" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </Icon>
  );
}
