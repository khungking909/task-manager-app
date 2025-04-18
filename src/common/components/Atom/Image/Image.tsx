import placeHolderImage from '@assets/placeholder-image.png';
import { css } from '@emotion/css';
import useScreenSize from '@hooks/useScreenSize';
import clsx from 'clsx';
import { addPx } from 'src/common/untils/addPx';
import { getValueFromBreakpoint } from 'src/common/untils/getValueFromBreakpoint';
import { ImageTypes } from './type';

export function Image({
  src,
  alt,
  borderRadius,
  aspectRatio,
  objectFit = 'cover',
  className = '',
}: Readonly<ImageTypes>) {
  const responsive = useScreenSize();

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const currentTarget = e.currentTarget;
    if (currentTarget) currentTarget.src = placeHolderImage;
  };

  return (
    <img
      src={src || placeHolderImage}
      alt={alt}
      onError={onImageError}
      className={clsx(
        css`
          width: 100%;
          height: 100%;
          object-fit: ${objectFit};
          border-radius: ${addPx(getValueFromBreakpoint(responsive, borderRadius))};
          aspect-ratio: ${aspectRatio};
        `,
        className,
      )}
    />
  );
}
