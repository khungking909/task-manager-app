import React from 'react';

export interface BreadCrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly separator?: React.ReactNode;
  readonly children: React.ReactNode[];
  readonly maxItems?: number;
  readonly dot?: React.ReactNode;
}
