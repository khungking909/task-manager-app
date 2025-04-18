import { BadgeTypes } from '@components/Atom/Badge/type';
import { Typography } from '@components/Atom/Typography';
import { useMemo } from 'react';
import badgeClass from './badge.module.scss';
/**
 * It’s a reusable component designed to render an Text
 */
export function Badge({
  size = 'medium',
  roundness,
  outline,
  shape = 'sharp',
  color,
  children,
  className,
}: Readonly<BadgeTypes>) {
  const classStyle = useMemo(() => {
    return {
      badge: badgeClass.badge,
      badgeShapeCircle: badgeClass['badge-shape-circle'],
      badgeVariant: outline ? badgeClass.badge__outline : '',
      badgeShapeCircleSize: badgeClass[`badge-shape-circle--${size}`],
      badgeRoundness: badgeClass[`badge-roundness--${roundness}`],
      badgeSize: badgeClass[`badge-size--${size}`],
      customClassName: className,
    };
  }, [className, outline, roundness, size]);

  return (
    <div
      data-testid="badge"
      className={[
        classStyle.badge,
        classStyle.badgeVariant,
        shape === 'circle' && classStyle.badgeShapeCircle,
        shape === 'circle' && classStyle.badgeShapeCircleSize,
        shape === 'sharp' && classStyle.badgeRoundness,
        shape === 'sharp' && classStyle.badgeSize,
        color ? badgeClass[`color--${color}`] : '',
        classStyle.customClassName,
      ]
        .join(' ')
        .trim()}
    >
      <Typography fontWeight="semibold" className={badgeClass[`badge__text__size--${size}`]}>
        {children}
      </Typography>
    </div>
  );
}
