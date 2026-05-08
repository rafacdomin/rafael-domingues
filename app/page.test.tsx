import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock the components
vi.mock('@/components/Hero', () => ({
  default: () => <div data-testid="hero-mock">Mock Hero</div>
}));

vi.mock('@/components/lightswind/particles-background', () => ({
  default: () => <div data-testid="particles-mock">Mock Particles</div>
}));

describe('Home Page', () => {
  it('renders the Home page with Hero and Particles components', () => {
    render(<Home />);
    
    expect(screen.getByTestId('particles-mock')).toBeInTheDocument();
    expect(screen.getByTestId('hero-mock')).toBeInTheDocument();
  });
});
