import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock the components
vi.mock('@/components/Hero', () => ({
  default: () => <div data-testid="hero-mock">Mock Hero</div>
}));

vi.mock('@/components/ParticlesWrapper', () => ({
  default: (props: Record<string, unknown>) => <div data-testid="particles-wrapper-mock" data-colors={JSON.stringify(props.colors)}>Mock Particles</div>
}));

describe('Home Page', () => {
  it('renders the Home page with Hero and ParticlesWrapper components', () => {
    render(<Home />);
    
    expect(screen.getByTestId('particles-wrapper-mock')).toBeInTheDocument();
    expect(screen.getByTestId('hero-mock')).toBeInTheDocument();
  });
});
