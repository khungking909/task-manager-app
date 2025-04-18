import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function Phone(props: Readonly<Readonly<IconProps>>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.06458 3.89606H9.06458L11.0646 8.89606L8.56458 10.3961C9.63553 12.5676 11.393 14.3251 13.5646 15.3961L15.0646 12.8961L20.0646 14.8961V18.8961C20.0646 19.4265 19.8539 19.9352 19.4788 20.3103C19.1037 20.6853 18.595 20.8961 18.0646 20.8961C14.1638 20.659 10.4847 19.0026 7.7214 16.2392C4.95808 13.4759 3.30162 9.79679 3.06458 5.89606C3.06458 5.36562 3.27529 4.85692 3.65036 4.48184C4.02543 4.10677 4.53414 3.89606 5.06458 3.89606"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
}
