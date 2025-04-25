import { Task } from '@components/Molecules/Task/Task';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Task', () => {
  it('should render', () => {
    const { container } = render(<Task name={'Test'} description="description" status="done" />);
    expect(container).toBeInTheDocument();
  });
});
