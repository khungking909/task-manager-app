import { TaskProgress } from '@components/Molecules/TaskProgress/TaskProgress';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('TaskProgress', () => {
  it('should render', () => {
    const { container } = render(<TaskProgress description="test" name="test" />);
    expect(container).toBeInTheDocument();
  });
});
