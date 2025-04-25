import { CircularProgress } from '@components/Atom/CircularProgress/CircularProgress';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('CircularProgress', () => {
  it('should render', () => {
    const { container } = render(<CircularProgress color="light" percentage={50} />);
    expect(container).toBeInTheDocument();
  });
});
