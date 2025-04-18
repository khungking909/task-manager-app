import { useMemo } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import navigationModuleClass from './NavigationItem.module.scss';
import { NavigationItemProps } from './type';

export function NavigationItem({
  variant = 'dot',
  active,
  direction = 'horizontal',
  color = 'dark',
  ...props
}: Readonly<NavigationItemProps>) {
  /**
   * Set up class of pagination dot
   * */
  const classNames = useMemo(() => {
    const baseClass = navigationModuleClass['pagination-dot'];
    const wrapDotClass = navigationModuleClass['wrap-dot'];
    const activeClass =
      variant === 'pill'
        ? navigationModuleClass[`active__pill--${direction}`]
        : navigationModuleClass[`active`];

    return {
      wrapDotClass: arrayToString([
        wrapDotClass,
        active ? activeClass : '',
        navigationModuleClass[`color__${color}`],
      ]),
      spanClass: arrayToString([baseClass, active ? activeClass : '']),
    };
  }, [variant, direction, active, color]);

  return (
    <div data-testid="pagination-dot" className={classNames.wrapDotClass} {...props}>
      <span className={classNames.spanClass}></span>
    </div>
  );
}
