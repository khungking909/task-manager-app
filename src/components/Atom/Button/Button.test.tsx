import { Button } from '@components/Atom/Button/Button';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
  it('should render', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });
});
