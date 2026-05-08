import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from './index';
import * as useMobileHook from '@/hooks/use-mobile';

vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: vi.fn()
}));

// Mock TypewriterPhrase to simplify testing
vi.mock('@/components/TypewriterPhrase', () => ({
  default: () => <div data-testid="typewriter-phrase">Mock Typewriter</div>
}));

describe('Hero', () => {
  const mockPhrases = [['Phrase 1', 'Part 2']];
  const mockSocials = [
    { href: 'https://test.com', iconSrc: '/test.png', label: 'Test Social' }
  ];

  it('renders desktop view correctly', () => {
    vi.spyOn(useMobileHook, 'useIsMobile').mockReturnValue(false);

    render(<Hero phrases={mockPhrases} socials={mockSocials} />);
    
    expect(screen.getByText('Rafael Domingues')).toBeInTheDocument();
    expect(screen.getByText('Frontend Software Engineer')).toBeInTheDocument();
    expect(screen.getByTestId('typewriter-phrase')).toBeInTheDocument();
    expect(screen.getByText('Test Social')).toBeInTheDocument();
  });

  it('renders mobile view correctly', () => {
    vi.spyOn(useMobileHook, 'useIsMobile').mockReturnValue(true);

    render(<Hero phrases={mockPhrases} socials={mockSocials} />);
    
    expect(screen.getByText('Rafael Domingues')).toBeInTheDocument();
    expect(screen.getByText('Frontend Software Engineer')).toBeInTheDocument();
    expect(screen.getByTestId('typewriter-phrase')).toBeInTheDocument();
    expect(screen.getByText('Test Social')).toBeInTheDocument();
  });
});
