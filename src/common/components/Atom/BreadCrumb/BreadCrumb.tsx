import { Typography } from '@components/Atom/Typography';
import React from 'react';
import breadCrumbClass from './BreadCrumb.module.scss';
import { BreadCrumbProps } from './type';

const BreadCrumb = ({ separator = '/', dot = '...', maxItems = 3, children = [] }: BreadCrumbProps) => {
  const items = React.Children.toArray(children);
  let displayItems = items;

  if (items.length > maxItems) {
    const lastItems = items.slice(-(maxItems - 1));
    displayItems = [
      items[0],
      <span key="dots" className={dot === '...' ? breadCrumbClass.bread__crumb__dots : ''}>
        {dot}
      </span>,
      ...lastItems,
    ];
  }

  return (
    <div className={breadCrumbClass.bread__crumb}>
      {displayItems.map((child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Typography color="gray">{separator}</Typography>}
          {child}
        </React.Fragment>
      ))}
    </div>
  );
};

export { BreadCrumb };
