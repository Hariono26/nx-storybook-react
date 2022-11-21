import { render } from '@testing-library/react';

import Greeter from './greeter';

describe('Greeter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Greeter />);
    expect(baseElement).toBeTruthy();
  });
});
