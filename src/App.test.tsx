import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vite-plus/test';
import App from './App';
import { EXPERIENCE, PROFILE, SESSION_KEY_INTRO_SEEN } from './common/constants';

describe('App', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('should show the preloader on the first visit', () => {
    render(<App />);

    expect(screen.getByRole('status', { name: 'Loading portfolio' })).toBeInTheDocument();
  });

  it('should skip the preloader once the intro was seen in this session', () => {
    sessionStorage.setItem(SESSION_KEY_INTRO_SEEN, 'true');

    render(<App />);

    expect(screen.queryByRole('status', { name: 'Loading portfolio' })).not.toBeInTheDocument();
  });

  it('should render the main heading with the full name', () => {
    sessionStorage.setItem(SESSION_KEY_INTRO_SEEN, 'true');

    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(PROFILE.firstName + PROFILE.lastName);
  });

  it('should render every past company', () => {
    sessionStorage.setItem(SESSION_KEY_INTRO_SEEN, 'true');

    render(<App />);

    const expectedResult = EXPERIENCE.map((experience) => `@ ${experience.company}`);
    const actualResult = EXPERIENCE.map((experience) => screen.getByText(`@ ${experience.company}`).textContent);

    expect(actualResult).toEqual(expectedResult);
  });

  it('should offer the CV as a download', () => {
    sessionStorage.setItem(SESSION_KEY_INTRO_SEEN, 'true');

    render(<App />);

    const downloadLink = screen.getByRole('link', { name: 'Download CV' });

    expect(downloadLink).toHaveAttribute('href', PROFILE.cvPath);
  });

  it('should link to the email address', () => {
    sessionStorage.setItem(SESSION_KEY_INTRO_SEEN, 'true');

    render(<App />);

    expect(screen.getByRole('link', { name: 'Say hello' })).toHaveAttribute('href', `mailto:${PROFILE.email}`);
  });
});
