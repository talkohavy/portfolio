import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';
import Portrait from './Portrait';

describe('Portrait', () => {
  it('should show the placeholder while the photo is loading', () => {
    render(<Portrait />);

    expect(screen.getByTestId('portrait-placeholder')).toBeInTheDocument();
  });

  it('should load the photo from the public folder', () => {
    render(<Portrait />);

    expect(screen.getByTestId('portrait-image')).toHaveAttribute('src', '/profile.jpg');
  });

  it('should replace the placeholder once the photo loads', () => {
    render(<Portrait />);

    fireEvent.load(screen.getByTestId('portrait-image'));

    expect(screen.queryByTestId('portrait-placeholder')).not.toBeInTheDocument();
  });

  it('should keep the placeholder and hide the image when the photo is missing', () => {
    render(<Portrait />);

    fireEvent.error(screen.getByTestId('portrait-image'));

    expect(screen.getByTestId('portrait-image')).toHaveClass('hidden');
  });
});
