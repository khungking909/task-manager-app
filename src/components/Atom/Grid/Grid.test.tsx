import { Grid } from '@components/Atom/Grid/Grid';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Grid', () => {
  it('should render', () => {
    const { container } = render(<Grid />);
    expect(container).toBeInTheDocument();
  });
});
