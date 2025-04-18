import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function Telegram(props: Readonly<Readonly<IconProps>>) {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="100%" height="100%">
        <circle cx="512" cy="512" r="512" fill="#0088CC" />
        <path
          d="M772.1 288.2L246.4 478.8c-18.8 6.8-17.9 16.3-3.1 21.3l134.8 50.6 52.6 138.2c5.4 14.3 9.7 19.6 17.9 19.6 8.2 0 11.4-3.2 15.7-7.1 3.9-3.6 27.4-26.6 53.3-52.2l110.7 81.7c20.4 11.3 35.1 5.5 40.1-18.9L796.5 312c6.5-27.7-11.1-39.9-24.4-23.8L414.8 557.5 330 525.2l375.2-162.6c18.7-8.3 35.7 1.5 28.5 25.6z"
          fill="#FFF"
        />
      </svg>
    </Icon>
  );
}
