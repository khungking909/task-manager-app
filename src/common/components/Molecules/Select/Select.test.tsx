import { Select } from '@components/Molecules/Select/Select';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Select', () => {
  it('should render', () => {
    const { container } = render(
      <Select />,
    );
    expect(container).toBeInTheDocument();
  });
});
