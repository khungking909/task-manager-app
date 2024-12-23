import { Box } from '@components/Atom/Box/Box';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Box', () => {
  it('should render', () => {
    const { container } = render(<Box />);
    expect(container).toBeInTheDocument();
  });
});
