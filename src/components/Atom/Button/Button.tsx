import { useMemo } from 'react';
import { arrayToString } from 'src/utils/arrayToString';
import buttonClassModule from './Button.module.scss';
import { ButtonProps } from './type';

const Button = ({
  shape = 'default',
  outline,
  roundness,
  size = 'medium',
  color,
  type = 'button',
  IconLeft,
  IconRight,
  disabled,
  children,
}: ButtonProps) => {
  const buttonClass = useMemo(() => {
    return arrayToString([
      buttonClassModule.button,
      buttonClassModule[`shape--${shape}`],
      buttonClassModule[`size--${size}`],
      buttonClassModule[`roundness--${roundness}`],
      buttonClassModule[`color--${color}`],
      outline ? buttonClassModule.outline : '',
      outline ? buttonClassModule[`outline--${color}`] : '',
      shape === 'underline' ? buttonClassModule.underline : '',
      shape === 'underline' ? buttonClassModule[`underline--${color}`] : '',
      disabled ? buttonClassModule.disabled : '',
    ]);
  }, [color, disabled, outline, roundness, shape, size]);
  return (
    <button type={type} className={buttonClass}>
      <div className={arrayToString([buttonClassModule.content, buttonClassModule[`font-size--${size}`]])}>
        {IconLeft}
        {children}
        {IconRight}
      </div>
    </button>
  );
};

export { Button };
