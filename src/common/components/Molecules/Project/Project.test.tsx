import { Project } from '@components/Molecules/Project/Project';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Project', () => {
  it('should render', () => {
    const { container } = render(<Project completedPercent={70} name="ProjectTest" totalTasks={30} />);
    expect(container).toBeInTheDocument();
  });
});
