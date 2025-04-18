import { Box } from '@components/Atom/Box';
import { Typography } from '@components/Atom/Typography';
import useScreenSize from '@hooks/useScreenSize';
import { forwardRef } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getIsMobile } from 'src/common/untils/isMobile';
import textAreaModuleClass from './TextArea.module.scss';
import { TextAreaProps } from './type';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      placeholder,
      disable,
      errorMessage,
      variant = 'contained',
      className = '',
      ...props
    }: TextAreaProps,
    ref,
  ) => {
    const responsive = useScreenSize();
    const isMobile = getIsMobile(responsive);

    return (
      <Box
        display="flex"
        flexDirection="column"
        gap={8}
        className={arrayToString([
          textAreaModuleClass['text-area'],
          disable ? textAreaModuleClass.disable : '',
        ])}
      >
        {label && (
          <Typography fontSize={isMobile ? 'sm' : 'base'} color="black" fontWeight="semibold">
            {label}
          </Typography>
        )}
        <textarea
          ref={ref}
          placeholder={placeholder}
          className={arrayToString([
            textAreaModuleClass[variant],
            errorMessage ? textAreaModuleClass.error : '',
            className,
          ])}
          {...props}
        ></textarea>
        {errorMessage && (
          <Typography fontSize="xs" color="700">
            {errorMessage}
          </Typography>
        )}
      </Box>
    );
  },
);

TextArea.displayName = 'TextArea';

export { TextArea };
