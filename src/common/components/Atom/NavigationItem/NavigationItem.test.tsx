import { NavigationItem } from '@components/Atom/NavigationItem/NavigationItem';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('NavigationItem', () => {
  it('should render', () => {
    const { container } = render(<NavigationItem />);
    expect(container).toBeInTheDocument();
  });
});
