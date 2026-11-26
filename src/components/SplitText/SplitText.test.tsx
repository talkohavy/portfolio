import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';
import SplitText from './SplitText';

describe('SplitText', () => {
  it('should expose the full text as an accessible label', () => {
    render(<SplitText as='h2' text='Hello world' />);

    expect(screen.getByRole('heading', { name: 'Hello world' })).toBeInTheDocument();
  });

  it('should render one animated span per character', () => {
    const { container } = render(<SplitText text='Hi you' charClassName='char' />);

    const chars = container.querySelectorAll('.char');

    expect(chars).toHaveLength(5);
  });
});
