import { forwardRef } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import inputModuleClass from './Input.module.scss';
import { InputProps } from './type';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      prefix,
      suffix,
      dropdown,
      outline,
      variant = 'default',
      errorMessage,
      bgColor = 'white',
      fullWidth,
      disabled,
      defaultValue,
      onClickSuffix,
      onClickPrefix,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <>
        <div
          className={arrayToString([
            inputModuleClass.input,
            variant === 'rounded' ? inputModuleClass.rounded : '',
            variant === 'underline' ? inputModuleClass.underline : '',
            variant === 'pill' ? inputModuleClass.pill : '',
            outline ? inputModuleClass.outline : '',
            errorMessage ? inputModuleClass.error : '',
            fullWidth ? inputModuleClass.fullWidth : '',
            inputModuleClass[`bgColor__${bgColor}`],
            disabled ? inputModuleClass.disabled : '',
          ])}
        >
          {dropdown && <div className={inputModuleClass.input__dropdown}>{dropdown}</div>}
          <div className={inputModuleClass.input__item}>
            {prefix && (
              <div className={inputModuleClass.prefix} onClick={onClickPrefix} aria-hidden="true">
                {prefix}
              </div>
            )}
            <input ref={ref} placeholder={placeholder} defaultValue={defaultValue} {...props} />
            {suffix && (
              <div className={inputModuleClass.suffix} onClick={onClickSuffix} aria-hidden="true">
                {suffix}
              </div>
            )}
          </div>
        </div>
        {errorMessage && <div className={inputModuleClass.errorMessage}>{errorMessage}</div>}
      </>
    );
  },
);

Input.displayName = 'Input';

export { Input };
