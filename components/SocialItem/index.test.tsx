import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SocialItem from './index';

describe('SocialItem', () => {
  it('renders correctly with given props', () => {
    render(<SocialItem href="https://example.com" iconSrc="/icon.png" label="Example" />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    
    const image = screen.getByAltText('Example');
    // For Next.js image component we check that src contains the icon
    expect(image.getAttribute('src')).toContain('icon.png');
    expect(image).toBeInTheDocument();
    
    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
