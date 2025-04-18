import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from '@components/Atom/Badge';

describe('badge', () => {
  it('render successfully', () => {
    const BADGE_VALUE = 'SALE';
    const { getByTestId } = render(<Badge>{BADGE_VALUE}</Badge>);
    /**
     * Get element have test-id = "badge"
     */
    const elem = getByTestId('badge');
    /**
     * Expect textContent element = BADGE_VALUE
     */
    expect(elem?.textContent).toEqual(BADGE_VALUE);
  });
});
