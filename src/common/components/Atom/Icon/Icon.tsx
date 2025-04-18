import { arrayToString } from 'src/common/untils/arrayToString';
import iconClassModule from './Icon.module.scss';
import { IconProps } from './type';

const Icon = ({
  className = '',
  size = 'medium',
  color,
  box,
  boxVariant = 'square',
  boxSize = 'medium',
  boxColor,
  children,
  disabled,
  ...props
}: IconProps) => {
  return (
    <div
      className={arrayToString([
        iconClassModule.icon,
        iconClassModule[`size--${size}`],
        iconClassModule[`color--${color}`],
        box ? iconClassModule.box : '',
        box ? iconClassModule[`box--${boxVariant}`] : '',
        box ? iconClassModule[`box__size--${boxSize}`] : '',
        box ? iconClassModule[`box__color--${boxColor}`] : '',
        disabled ? iconClassModule.disabled : '',
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};

export { Icon };
