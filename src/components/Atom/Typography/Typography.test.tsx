import { Typography } from '@components/Atom/Typography/Typography';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Typography', () => {
  const TYPOGRAPHY = 'Typography';

  it('should render', () => {
    const { container } = render(<Typography>{TYPOGRAPHY}</Typography>);
    expect(container).toBeInTheDocument();
  });
});
