import { render } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import ParticlesBackground from './particles-background';

describe('ParticlesBackground', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the container', () => {
    const { container } = render(<ParticlesBackground />);
    expect(container.querySelector('#js-particles')).toBeInTheDocument();
  });

  it('appends script to body and calls particlesJS when script loads', () => {
    // Set up window dimensions to test count behavior
    window.innerWidth = 1200;

    render(<ParticlesBackground countDesktop={100} colors={['#fff']} size={5} />);
    
    const scripts = document.querySelectorAll('script');
    const particleScript = Array.from(scripts).find(s => s.src === 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js');
    
    expect(particleScript).toBeDefined();
    
    // Simulate script load
    if (particleScript && particleScript.onload) {
      particleScript.onload(new Event('load'));
    }
    
    // particlesJS should be called
    expect(window.particlesJS).toHaveBeenCalled();
    const callArgs = (window.particlesJS as any).mock.calls[0];
    expect(callArgs[0]).toBe('js-particles');
    expect(callArgs[1].particles.color.value).toEqual(['#fff']);
    expect(callArgs[1].particles.size.value).toBe(5);
    expect(callArgs[1].particles.number.value).toBe(100); // Because width > 1024
  });

  it('uses tablet count when width is between 768 and 1024', () => {
    window.innerWidth = 800;
    render(<ParticlesBackground countTablet={50} />);
    
    const scripts = document.querySelectorAll('script');
    const particleScript = Array.from(scripts).find(s => s.src === 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js');
    if (particleScript && particleScript.onload) {
      particleScript.onload(new Event('load'));
    }
    
    const callArgs = (window.particlesJS as any).mock.calls.pop();
    expect(callArgs[1].particles.number.value).toBe(50);
  });

  it('uses mobile count when width is less than 768', () => {
    window.innerWidth = 500;
    render(<ParticlesBackground countMobile={30} />);
    
    const scripts = document.querySelectorAll('script');
    const particleScript = Array.from(scripts).find(s => s.src === 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js');
    if (particleScript && particleScript.onload) {
      particleScript.onload(new Event('load'));
    }
    
    const callArgs = (window.particlesJS as any).mock.calls.pop();
    expect(callArgs[1].particles.number.value).toBe(30);
  });
});
