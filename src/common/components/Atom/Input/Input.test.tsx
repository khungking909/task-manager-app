import { Input } from '@components/Atom/Input/Input';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Input', () => {
  it('should render', () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });
});
