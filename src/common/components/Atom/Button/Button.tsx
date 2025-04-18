import { useMemo } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
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
  fullWidth,
  children,
  className = '',
  align = 'center',
  ...props
}: ButtonProps) => {
  const buttonClass = useMemo(() => {
    return arrayToString([
      buttonClassModule.button,
      fullWidth ? buttonClassModule.full__width : '',
      buttonClassModule[`shape--${shape}`],
      buttonClassModule[`size--${size}`],
      buttonClassModule[`roundness--${roundness}`],
      buttonClassModule[`color--${color}`],
      buttonClassModule[`align__${align}`],
      outline ? buttonClassModule.outline : '',
      outline ? buttonClassModule[`outline--${color}`] : '',
      shape === 'underline' ? buttonClassModule.underline : '',
      shape === 'underline' ? buttonClassModule[`underline--${color}`] : '',
      disabled ? buttonClassModule.disabled : '',
      className,
    ]);
  }, [align, className, color, disabled, fullWidth, outline, roundness, shape, size]);
  return (
    <button type={type} className={buttonClass} {...props}>
      <div
        className={arrayToString([
          buttonClassModule.content,
          typeof children === 'string' ? buttonClassModule[`font-size--${size}`] : '',
        ])}
      >
        {IconLeft}
        {children}
        {IconRight}
      </div>
    </button>
  );
};

export { Button };
