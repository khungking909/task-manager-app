import { render } from '@testing-library/react';
import { Box } from 'src/common/components/Atom/Box/Box';
import { describe, expect, it } from 'vitest';

describe('Box', () => {
  it('should render', () => {
    const { container } = render(<Box />);
    expect(container).toBeInTheDocument();
  });
});
