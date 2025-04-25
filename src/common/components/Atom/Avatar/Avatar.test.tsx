import { Avatar } from '@components/Atom/Avatar/Avatar';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Avatar', () => {
  it('should render', () => {
    const { container } = render(<Avatar image="test" />);

    expect(container).toBeInTheDocument();
  });
});
