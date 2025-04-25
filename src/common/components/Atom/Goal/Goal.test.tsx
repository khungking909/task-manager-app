import { Goal } from '@components/Atom/Goal/Goal';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Goal', () => {
  it('should render', () => {
    const { container } = render(<Goal color="#ffffff" value="50%" />);
    expect(container).toBeInTheDocument();
  });
});
