import { render } from '@testing-library/react';
import { Button } from 'src/common/components/Atom/Button/Button';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
  it('should render', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });
});
