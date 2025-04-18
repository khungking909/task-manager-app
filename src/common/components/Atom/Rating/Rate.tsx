import { YellowStar } from '@components/Atom/Icon/icons';
import { EmptyStar } from '@components/Atom/Icon/icons/EmptyStar';
import { RatingTypes } from '@components/Atom/Rating/type';
import { Typography } from '@components/Atom/Typography';
import { createRef, useEffect, useState } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import ratingClass from './rate.module.scss';

const RATING_UP_THRESHOLD = 0.75;
const RATING_DOWN_THRESHOLD = 0.25;
/**
 * It’s a reusable component designed to render an Text
 */
export function Rating({
  starValue = 0,
  title,
  onClickStar,
  allowHover = false,
  emptyStar = <EmptyStar color="warning" />,
  yellowStar = <YellowStar color="warning" />,
  className = '',
}: Readonly<RatingTypes>) {
  const [value, setValue] = useState(starValue);
  const starRefs = Array.from({ length: 5 }, () => createRef<HTMLDivElement>());

  const handleStarInteraction = (
    index: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    callback: (value: number) => void,
  ) => {
    const starRef = starRefs[index].current;
    if (!starRef) return;

    const { left, width } = starRef.getBoundingClientRect();
    const { clientX } = e;

    if (clientX > left + width / 2) {
      callback(index + 1);
    } else {
      callback(index + 0.5);
    }
  };

  const onChangeValue = (index: number) => {
    setValue(index);
  };

  const onHoverStar = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleStarInteraction(index, e, onChangeValue);
  };

  const onClickStarToChangeValue = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => () => {
    if (onClickStar) {
      handleStarInteraction(index, e, onClickStar);
    }
  };

  /**
   * Render empty star or half star
   */
  const emptyStarOrHashStar = (index: number) => {
    if (index - value > RATING_UP_THRESHOLD) return emptyStar;
    else if (index - value <= RATING_DOWN_THRESHOLD) return yellowStar;

    return (
      <div className={ratingClass['empty-start']}>
        {emptyStar}
        <div className={ratingClass['half-star']}>{yellowStar}</div>
      </div>
    );
  };

  useEffect(() => {
    setValue(starValue);
  }, [starValue]);

  return (
    <div className={arrayToString([ratingClass['rate'], className])}>
      <div className={ratingClass['star-group']}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div
              ref={starRefs[index]}
              onMouseMove={(e) => {
                if (!allowHover) return;
                onHoverStar(index, e);
              }}
              onMouseLeave={() => {
                if (!allowHover) return;
                setValue(starValue);
              }}
              data-testid="rating"
              key={item}
              className={ratingClass['rate-star']}
              onClick={(e) => onClickStarToChangeValue(index, e)}
              aria-hidden
            >
              {item <= value ? yellowStar : emptyStarOrHashStar(index + 1)}
            </div>
          );
        })}
      </div>
      {title && (
        <Typography fontSize="xs" color="600" lineHeight={20}>
          {title}
        </Typography>
      )}
    </div>
  );
}
